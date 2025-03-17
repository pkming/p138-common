/**
 * 开发环境配置
 * 用于本地开发时的配置项
 */
import './P138Config.d';

const developmentConfig: P138Config.AppConfig = {
  env: 'development',
  api: {
    // 使用开发环境API
    customerApi: 'http://192.168.31.249:8888',
    businessApi: 'http://192.168.31.249:8889',
    customerUi: 'http://192.168.31.44:3000',
    businessUi: 'http://192.168.31.44:8080',
  },
  storage: {
    userInfoKey: 'userInfo',
    loginCredentialsKey: 'loginCredentials',
  },
  resources: {
    defaultImageUrl: 'https://luckyaliimg.rxhhsm.com/img/default.png',
    rongCloudSecret: 'BZiT0rwTY60f8',
  },
  business: {
    minPasswordLength: 6,
    requestTimeout: 15000,
  }
};

export default developmentConfig; 