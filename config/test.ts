/**
 * 测试环境配置
 * 用于QA测试的配置项
 */
import './P138Config.d';

const testConfig: P138Config.AppConfig = {
  env: 'test',
  api: {
    // 使用测试环境API
    customerApi: 'https://p138-customer-api-test.shenz.dev',
    businessApi: 'https://p138-business-api-test.shenz.dev',
    customerUi: 'https://p138-client-ui-test.shenz.dev',
    businessUi: 'https://p138-business-ui-test.shenz.dev',
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

export default testConfig; 