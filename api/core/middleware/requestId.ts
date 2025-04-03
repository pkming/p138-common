

import { generateSnowflakeId } from "../../utils/snowflake";




export const requestIdMiddleware: P138Api.IMiddleware = {
  name: 'requestId',
  async onRequest(context) {
    if (!context.request) return;
    // 添加到请求头
    context.request.header = {
      ...context.request.header,
      'X-Request-ID': generateSnowflakeId(),
      'X-Device-ID': context.config.deviceIdGenerator?.getOrCreateDeviceId() || ''
    };
  }
}; 