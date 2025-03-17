/**
 * P138项目配置类型定义
 * 使用命名空间组织所有配置相关类型
 */

declare namespace P138Config {
  // 环境类型
  export type Environment = 'development' | 'production' | 'test';

  // API端点配置
  export interface ApiEndpoints {
    // C端API基础URL
    customerApi: string;
    // B端API基础URL
    businessApi: string;
    // C端H5页面URL
    customerUi: string;
    // B端H5页面URL
    businessUi: string;
  }

  // 存储相关配置
  export interface StorageConfig {
    // 用户信息存储键
    userInfoKey: string;
    // 登录凭证存储键
    loginCredentialsKey: string;
  }

  // 资源配置
  export interface ResourceConfig {
    // 默认图片URL
    defaultImageUrl: string;
    // 融云应用密钥
    rongCloudSecret: string;
  }

  // 业务配置
  export interface BusinessConfig {
    // 最小密码长度
    minPasswordLength: number;
    // 请求超时时间(毫秒)
    requestTimeout: number;
  }

  // 完整配置接口
  export interface AppConfig {
    // 当前环境
    env: Environment;
    // API端点配置
    api: ApiEndpoints;
    // 存储配置
    storage: StorageConfig;
    // 资源配置
    resources: ResourceConfig;
    // 业务配置
    business: BusinessConfig;
  }
} 