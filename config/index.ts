/**
 * P138通用配置
 */

// URL配置
export const URL_CONFIG = {
  //本地环境
  Local_Client_API: 'http://192.168.31.249:8888',
  Local_Client_H5: 'http://192.168.31.72:8081',
  Local_Business_API: 'http://192.168.31.249:8889',
  Local_Business_H5: 'http://192.168.31.72:8082',
  Local_Admin_API: 'http://192.168.31.249:8887',
  Local_Admin_H5: 'http://192.168.31.72:8000',

  //测试环境
  Staging_Client_API: 'https://customer-api-p138-dev.lengz.cc',
  Staging_Client_H5: 'https://client-ui-p138-dev.lengz.cc',
  Staging_Business_API: 'https://business-api-p138-dev.lengz.cc',
  Staging_Business_H5: 'https://business-ui-p138-dev.lengz.cc',
  Staging_Admin_API: 'https://admin-api-p138-dev.lengz.cc',
  Staging_Admin_H5: 'https://admin-ui-p138-dev.lengz.cc',

  //生产环境
  Production_Client_API: 'https://customer-api-p138-dev.lengz.cc',
  Production_Client_H5: 'https://client-ui-p138-dev.lengz.cc',
  Production_Business_API: 'https://business-api-p138-dev.lengz.cc',
  Production_Business_H5: 'https://business-ui-p138-dev.lengz.cc',
  Production_Admin_API: 'https://admin-api-p138-dev.lengz.cc',
  Production_Admin_H5: 'https://admin-ui-p138-dev.lengz.cc',
} as const;

// 存储键名
export const STORAGE_KEYS = {
  TOKEN: '@p138/auth/token',
  REFRESH_TOKEN: '@p138/auth/refreshToken',
  USER_INFO: '@p138/auth/user',
  OAUTH_TOKEN: '@p138/auth/oAuthToken',
} as const;

// 默认图片
export const DEFAULT_IMAGE = 'https://img.p138.com/default.png'; 