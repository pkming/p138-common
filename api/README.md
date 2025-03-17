# P138通用API框架 

本模块提供通用的API请求工具和类型定义，**不包含任何特定环境或项目配置**。作为一个纯脚手架工具，它可以被任何项目（C端、B端等）引用和使用。

## 核心功能

- **HTTP客户端**: 基于axios的HTTP请求工具
- **类型定义**: 通用API响应类型定义
- **Token管理**: 访问令牌和刷新令牌的管理
- **错误处理**: 统一的错误处理机制

## 使用方法

### 在项目中创建API客户端

```typescript
// src/api/request.ts
import { createApiClient } from 'p138-common/api';
import { apiConfig } from './config';
import { BASEURL } from './config';

// 创建API客户端
const api = createApiClient({
  ...apiConfig,
  baseURL: BASEURL,
});

// 导出请求函数
export const request = api.request;

// 提供默认导出以兼容旧接口
export default request;

// 重新导出所有类型
export * from 'p138-common/api';
```

### 项目配置

每个项目需要提供自己的配置：

```typescript
// src/api/config.ts
import { ApiClientConfig } from 'p138-common/api';

export const apiConfig: Omit<ApiClientConfig, 'baseURL'> = {
  timeout: 15000,
  appVersion: '1.0.0',
  onLogout: () => {
    // 项目特定的登出逻辑
  },
  onShowToast: (message) => {
    // 项目特定的消息显示逻辑
  }
};
```

### 环境配置

每个项目需要为不同环境提供各自的基础URL和其他环境特定配置：

```typescript
// src/api/config/development.ts
export const BASEURL = 'http://localhost:8080';
export const API_VERSION = 'v1';
export const DEBUG = true;

// src/api/config/production.ts
export const BASEURL = 'https://api.production.example.com';
export const API_VERSION = 'v1';
export const DEBUG = false;
```

## API

### createApiClient(config)

创建一个API客户端实例，返回包含请求方法和配置更新功能的对象。

**参数**:

- `config`: ApiClientConfig - API客户端配置对象，必须包含baseURL

**返回值**:

一个对象，包含以下属性：

- `request`: 发送请求的函数
- `updateConfig`: 更新配置的函数
- `client`: 底层axios实例

### 类型定义

本模块导出多种类型定义，以便项目使用：

- `P138Api.ApiResponse<T>`: API成功响应
- `P138Api.ErrorResponse`: API错误响应
- `P138Api.PagedResponse<T>`: 分页数据响应
- `RequestProps`: 请求参数定义

## 项目结构建议

对于使用此脚手架的项目，建议采用以下结构：

```
project/
├── src/
│   ├── api/
│   │   ├── config/                 # 环境配置
│   │   │   ├── development.ts      # 开发环境
│   │   │   ├── production.ts       # 生产环境
│   │   │   ├── test.ts             # 测试环境
│   │   │   └── index.ts            # 配置入口
│   │   ├── interface/              # 接口定义（后端生成）
│   │   ├── service/                # 服务封装
│   │   ├── config.ts               # API功能配置
│   │   └── request.ts              # API客户端实例
```

## 注意事项

1. 本模块不包含任何特定环境的URL或项目配置
2. 使用前必须提供baseURL和其他必要配置
3. 推荐在项目中创建独立的环境配置文件 