/**
 * 生产环境配置
 * 用于正式上线的配置项
 */
import './P138Config.d';

const productionConfig: P138Config.AppConfig = {
  env: 'production',
  api: {
    // 使用生产环境API
    customerApi: 'https://p138-customer-api.shenz.dev',
    businessApi: 'https://p138-business-api.shenz.dev',
    customerUi: 'https://p138-client-ui.shenz.dev',
    businessUi: 'https://p138-business-ui.shenz.dev',
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

export default productionConfig; 