/**
 * 配置系统入口
 * 根据当前环境导出相应的配置
 */
import './P138Config.d';
import developmentConfig from './development';
import productionConfig from './production';
import testConfig from './test';

// 确定当前环境
const getEnvironment = (): P138Config.Environment => {
  // 可以通过不同方式获取环境变量:
  // 1. 通过process.env (在Node.js环境)
  // 2. 通过自定义全局变量 (在浏览器环境)
  // 3. 通过配置文件 (在React Native环境)
  
  // 这里使用一个简单的判断逻辑，实际项目中可以基于项目需求修改
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  } else if (process.env.NODE_ENV === 'test') {
    return 'test';
  }
  
  // 默认返回开发环境
  return 'development';
};

// 根据环境选择配置
const getConfigByEnvironment = (env: P138Config.Environment): P138Config.AppConfig => {
  switch (env) {
    case 'production':
      return productionConfig;
    case 'test':
      return testConfig;
    case 'development':
    default:
      return developmentConfig;
  }
};

// 当前应用配置
const currentEnv = getEnvironment();
const appConfig = getConfigByEnvironment(currentEnv);

console.log(`[Config] 当前环境: ${currentEnv}`);

// 导出当前环境配置
export default appConfig;

// 重新导出类型定义，保持与原来相同的导出方式兼容
export type AppConfig = P138Config.AppConfig;
export type ApiEndpoints = P138Config.ApiEndpoints;
export type StorageConfig = P138Config.StorageConfig;
export type ResourceConfig = P138Config.ResourceConfig;
export type BusinessConfig = P138Config.BusinessConfig;
export type Environment = P138Config.Environment;

// 导出便捷访问器
export const API = appConfig.api;
export const STORAGE = appConfig.storage;
export const RESOURCES = appConfig.resources;
export const BUSINESS = appConfig.business;

// 向后兼容的别名（支持原有代码平滑迁移）
export const BASEURL = appConfig.api.customerApi;
export const Business_BASEURL = appConfig.api.businessApi;
export const H5_Client_URL = appConfig.api.customerUi;
export const H5_Business_URL = appConfig.api.businessUi;
export const USER_INFO_KEY = appConfig.storage.userInfoKey;
export const STORAGE_KEY = appConfig.storage.loginCredentialsKey;
export const defaultImage = appConfig.resources.defaultImageUrl;
export const RongCloudAppSecret = appConfig.resources.rongCloudSecret; 