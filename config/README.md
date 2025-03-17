# P138配置系统

本配置系统用于统一管理项目中的各种配置项，包括API端点、存储键、资源URL等。

## 使用方法

### 推荐用法

从配置系统导入特定的配置项：

```typescript
// 导入特定配置
import { API, STORAGE, RESOURCES, BUSINESS } from 'p138-common/config';

// 使用示例
const customerApiUrl = API.customerApi;
const minPasswordLength = BUSINESS.minPasswordLength;
```

或者导入整个配置对象：

```typescript
// 导入整个配置
import appConfig from 'p138-common/config';

// 使用示例
const customerApiUrl = appConfig.api.customerApi;
```

如果需要使用类型，可以这样导入：

```typescript
// 导入类型
import { AppConfig, ApiEndpoints } from 'p138-common/config';

// 或者使用命名空间
import 'p138-common/config'; // 只需导入文件，不需要导入具体内容
const config: P138Config.AppConfig = { /* ... */ };
```

### 向后兼容

为了保持向后兼容，我们提供了与旧配置相同的导出名称：

```typescript
// 旧式导入方法（不推荐）
import { BASEURL, Business_BASEURL, H5_Client_URL } from 'p138-common/config';
```

## 配置项说明

### API端点 (API)

- `customerApi`: C端API基础URL
- `businessApi`: B端API基础URL
- `customerUi`: C端H5页面URL
- `businessUi`: B端H5页面URL

### 存储配置 (STORAGE)

- `userInfoKey`: 用户信息存储键
- `loginCredentialsKey`: 登录凭证存储键

### 资源配置 (RESOURCES)

- `defaultImageUrl`: 默认图片URL
- `rongCloudSecret`: 融云应用密钥

### 业务配置 (BUSINESS)

- `minPasswordLength`: 最小密码长度
- `requestTimeout`: 请求超时时间(毫秒)

## 环境配置

系统会根据当前环境自动选择相应的配置文件：

- `development.ts`: 开发环境配置
- `test.ts`: 测试环境配置
- `production.ts`: 生产环境配置

## 类型定义

所有配置相关的类型定义都位于`P138Config.d.ts`文件中，使用命名空间`P138Config`进行组织：

```typescript
declare namespace P138Config {
  export type Environment = 'development' | 'production' | 'test';
  export interface AppConfig { /* ... */ }
  export interface ApiEndpoints { /* ... */ }
  export interface StorageConfig { /* ... */ }
  export interface ResourceConfig { /* ... */ }
  export interface BusinessConfig { /* ... */ }
}
```

使用命名空间可以避免类型名称冲突，同时提供更清晰的命名结构。

如需添加或修改配置项，请在对应环境的配置文件中进行更改，并确保更新类型定义（`P138Config.d.ts`）。 