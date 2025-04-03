/**
 * Web平台API客户端实现
 */

import CryptoJS from 'crypto-js';
import { createApiClient } from '../core/client';

const DEVICE_ID_KEY = '@p138/device/id';

/**
 * Web平台设备ID生成器
 */
export class WebDeviceIdGenerator implements P138Api.IDeviceIdGenerator {
  getOrCreateDeviceId(): string {
    const existingId = localStorage.getItem(DEVICE_ID_KEY);
    if (existingId) {
      return existingId;
    }

    // 使用稳定的设备特征
    const components = [
      navigator.userAgent,
      navigator.language,
      navigator.hardwareConcurrency,
      (navigator as any).deviceMemory || 'unknown',
      screen.width,
      screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset()
    ];
    
    // 生成设备ID
    const deviceId = CryptoJS.MD5(components.join('|')).toString();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
    return deviceId;
  }

  clearDeviceId(): void {
    localStorage.removeItem(DEVICE_ID_KEY);
  }
}

/**
 * Web平台配置
 */
export interface IWebConfig extends P138Api.IBaseConfig {
  // 可以添加Web平台特有的配置
  useAntdMessage?: boolean; // 是否使用antd的message组件
}

/**
 * 创建Web平台的API客户端
 * @param config Web平台配置
 * @returns API客户端实例
 */
export function createWebApiClient(config: IWebConfig): P138Api.IApiClient {
  return createApiClient({
    ...config,
    storage: {
      getItem: (key: string) => localStorage.getItem(key),
      setItem: (key: string, value: string) => localStorage.setItem(key, value),
      removeItem: (key: string) => localStorage.removeItem(key)
    },
    toast: {
      show: (message: string) => config.onShowToast?.(message),
      error: (message: string) => config.onShowToast?.(message),
      success: (message: string) => config.onShowToast?.(message)
    },
    logout: config.onLogout || (() => {}),
    deviceIdGenerator: new WebDeviceIdGenerator()
  });
} 