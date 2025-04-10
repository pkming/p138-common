/**
 * Web平台API客户端实现
 */

import { createApiClient } from '../core/client';

const DEVICE_ID_KEY = '@p138/device/id';
// console.log('localStorage', localStorage);
/**
 * Web平台设备ID生成器
 */
export class WebDeviceIdGenerator implements P138Api.IDeviceIdGenerator {
  async getOrCreateDeviceId(): Promise<string> {
    // 先尝试从localStorage获取
    const existingId = await localStorage.getItem(DEVICE_ID_KEY);
    if (existingId) {
      return existingId;
    }

    // 收集浏览器特征
    const features = {
      // 浏览器信息
      userAgent: navigator.userAgent,
      language: navigator.language,
      languages: navigator.languages.join(','),
      platform: navigator.platform,
      vendor: navigator.vendor,
      
      // 屏幕信息
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
      
      // 硬件信息
      hardwareConcurrency: navigator.hardwareConcurrency,
      deviceMemory: (navigator as any).deviceMemory || 'unknown',
      
      // 时区信息
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezoneOffset: new Date().getTimezoneOffset(),
      
      // 其他特征
      touchPoints: navigator.maxTouchPoints,
      webglVendor: this.getWebGLInfo(),
      canvasFingerprint: this.getCanvasFingerprint()
    };

    // 生成设备ID
    const deviceId = this.generateStableId(features);
    console.log('设备特征:', features);
    console.log('生成的设备ID:', deviceId);
    await localStorage.setItem(DEVICE_ID_KEY, deviceId);
    return deviceId;
  }

  // 生成稳定的设备ID
  private generateStableId(features: Record<string, any>): string {
    // 1. 对特征进行排序和规范化
    const sortedFeatures = Object.keys(features)
      .sort()
      .map(key => `${key}:${features[key]}`)
      .join('|');

    // 2. 使用固定的哈希算法
    let hash = 0;
    for (let i = 0; i < sortedFeatures.length; i++) {
      const char = sortedFeatures.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为32位整数
    }

    // 3. 只使用特征哈希，不添加时间戳和随机数
    return Math.abs(hash).toString(16).padStart(8, '0');
  }

  // 获取WebGL信息
  private getWebGLInfo(): string {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') ||
        (canvas.getContext('experimental-webgl') as WebGLRenderingContext);
      if (!gl) return 'no-webgl';

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (!debugInfo) return 'no-debug-info';

      return `${gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)}|${gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)}`;
    } catch (e) {
      console.log('getWebGLInfo', e);
      return 'error';
    }
  }

  // 获取Canvas指纹
  private getCanvasFingerprint(): string {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'no-context';

      // 绘制一些内容
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#f60';
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = '#069';
      ctx.fillText('Hello, world!', 2, 15);
      ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
      ctx.fillText('Hello, world!', 4, 17);

      return canvas.toDataURL();
    } catch (e) {
      return 'error';
    }
  }

  async clearDeviceId(): Promise<void> {
    await localStorage.removeItem(DEVICE_ID_KEY);
  }
}

/**
 * 创建适配器
 */
export class AsyncStorageAdapter {
  static getItem(key: string): Promise<string | null> {
    return Promise.resolve(localStorage.getItem(key));
  }

  static setItem(key: string, value: string): Promise<void> {
    return Promise.resolve(localStorage.setItem(key, value));
  }

  static removeItem(key: string): Promise<void> {
    return Promise.resolve(localStorage.removeItem(key));
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
      getItem: (key: string) => AsyncStorageAdapter.getItem(key),
      setItem: (key: string, value: string) => AsyncStorageAdapter.setItem(key, value),
      removeItem: (key: string) => AsyncStorageAdapter.removeItem(key),
    },
    toast: {
      show: (message: string) => config.onShowToast?.(message),
      error: (message: string) => config.onShowToast?.(message),
      success: (message: string) => config.onShowToast?.(message),
    },
    logout: config.onLogout || (() => {}),
    deviceIdGenerator: new WebDeviceIdGenerator(),
  });
}
