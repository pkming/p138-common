/**
 * 配置兼容层
 * 为了保持向后兼容，重定向到新的配置系统
 * @deprecated 请使用 import { ... } from 'p138-common/config' 替代
 */

import appConfig from './index';

// 重新导出所有配置项
export const BASEURL = appConfig.api.customerApi;
export const Business_BASEURL = appConfig.api.businessApi;
export const H5_Client_URL = appConfig.api.customerUi;
export const H5_Business_URL = appConfig.api.businessUi;
export const USER_INFO_KEY = appConfig.storage.userInfoKey;
export const STORAGE_KEY = appConfig.storage.loginCredentialsKey;
export const defaultImage = appConfig.resources.defaultImageUrl;
export const RongCloudAppSecret = appConfig.resources.rongCloudSecret;
export const Client_BASEURL = appConfig.api.customerApi;

// 在控制台提示废弃警告 (仅在开发环境)
if (process.env.NODE_ENV !== 'production') {
  console.warn('[Config] 警告: 直接从p138-common/config/dev导入配置已废弃，请使用p138-common/config代替');
}
