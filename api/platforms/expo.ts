/**
 * Web平台API客户端实现
 */

import { createApiClient } from '../core/client';
import * as DeviceInfo from 'expo-device';
import * as Application from 'expo-application';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEVICE_ID_KEY = '@p138/device/id';

interface IStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

/**
 * Expo平台设备ID生成器
 */
export class ExpoDeviceIdGenerator implements P138Api.IDeviceIdGenerator {
  async getOrCreateDeviceId(): Promise<string> {
    try {
      // 先从存储中获取
      const existingId = await AsyncStorage.getItem(DEVICE_ID_KEY);
      if (existingId) {
        return existingId;
      }

      // 获取设备信息
      const deviceInfo = {
        deviceName:  DeviceInfo.deviceName,
        deviceType: DeviceInfo.deviceType,
        osName: DeviceInfo.osName,
        osVersion: DeviceInfo.osVersion,
        deviceYearClass:  DeviceInfo.deviceYearClass,
        totalMemory:  DeviceInfo.totalMemory,
        applicationId: Application.applicationId,
        // installationId:  Application.getAndroidId(),
      };
      console.log('deviceInfo', DeviceInfo);

      // 等待所有 Promise 完成
      const deviceInfoValues = await Promise.all(Object.values(deviceInfo));

      // 生成设备ID
      const deviceId = deviceInfoValues
        .filter(Boolean)
        .join('|')
        .split('')
        .reduce((acc, char) => {
          return ((acc << 5) - acc) + char.charCodeAt(0);
        }, 0)
        .toString(16);

      // 保存到存储
      await AsyncStorage.setItem(DEVICE_ID_KEY, deviceId);
      return deviceId;
    } catch (error) {
      console.error('Failed to generate device ID:', error);
      // 如果生成失败，返回一个基于时间戳的临时ID
      return `temp_${Date.now()}`;
    }
  }

  async clearDeviceId(): Promise<void> {
    await AsyncStorage.removeItem(DEVICE_ID_KEY);
  }
}

/**
 * Expo平台配置
 */
export interface IExpoConfig extends P138Api.IBaseConfig {
  // 可以添加Expo平台特有的配置
}

/**
 * 创建Expo平台的API客户端
 * @param config Expo平台配置
 * @returns API客户端实例
 */
export function createExpoApiClient(config: IExpoConfig): P138Api.IApiClient {
  return createApiClient({
    ...config,
    storage: {
      getItem: async (key: string) => {
        const value = await AsyncStorage.getItem(key);
        return value;
      },
      setItem: async (key: string, value: string) => {
        await AsyncStorage.setItem(key, value);
      },
      removeItem: async (key: string) => {
        await AsyncStorage.removeItem(key);
      }
    },
    toast: {
      show: (message: string) => config.onShowToast?.(message),
      error: (message: string) => config.onShowToast?.(message),
      success: (message: string) => config.onShowToast?.(message)
    },
    logout: config.onLogout || (() => {}),
    deviceIdGenerator: new ExpoDeviceIdGenerator()
  });
} 