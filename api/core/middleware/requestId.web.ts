import { generateSnowflakeId } from "../../utils/snowflake.web";





export const requestWebIdMiddleware: P138Api.IMiddleware = {
  name: 'requestWebId',
  async onRequest(context) {
    if (!context.request) return;
    // 添加到请求头
    context.request.header = {
      ...context.request.header,
      'X-Request-ID': generateSnowflakeId(),
      'X-Device-ID': await context.config.deviceIdGenerator?.getOrCreateDeviceId() || ''
    };
  }
}; 