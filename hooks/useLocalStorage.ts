/**
 * 本地存储Hook
 * 
 * 用于在React组件中使用AsyncStorage，提供类似useState的API
 * 依赖@react-native-async-storage/async-storage包
 */

import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 本地存储Hook
 * 
 * @param key 存储键名
 * @param initialValue 初始值
 * @returns [存储的值, 设置值的函数, 是否加载中, 错误信息, 手动刷新函数]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => Promise<void>, boolean, Error | null, () => Promise<void>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 从AsyncStorage加载数据
  const loadStoredValue = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const item = await AsyncStorage.getItem(key);
      
      if (item !== null) {
        // 如果找到值，解析并设置
        const value = JSON.parse(item) as T;
        setStoredValue(value);
      } else if (initialValue !== undefined) {
        // 如果没有值但有初始值，保存初始值
        await AsyncStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('读取本地存储失败'));
      console.error('从AsyncStorage读取数据失败:', err);
    } finally {
      setLoading(false);
    }
  }, [key, initialValue]);

  // 初始加载数据
  useEffect(() => {
    loadStoredValue();
  }, [loadStoredValue]);

  // 保存值到AsyncStorage
  const setValue = useCallback(
    async (value: T | ((val: T) => T)) => {
      try {
        setError(null);
        
        // 允许传入回调函数（类似setState）
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        
        // 保存到状态
        setStoredValue(valueToStore);
        
        // 保存到AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('保存到本地存储失败'));
        console.error('保存到AsyncStorage失败:', err);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue, loading, error, loadStoredValue];
}

/**
 * 简化版本的本地存储Hook
 * 
 * @param key 存储键名
 * @param initialValue 初始值
 * @returns [存储的值, 设置值的函数]
 */
export function useSimpleStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // 从AsyncStorage加载数据
  useEffect(() => {
    (async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        } else if (initialValue !== undefined) {
          await AsyncStorage.setItem(key, JSON.stringify(initialValue));
        }
      } catch (error) {
        console.error('从AsyncStorage读取数据失败:', error);
      }
    })();
  }, [key, initialValue]);

  // 保存值到AsyncStorage
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // 允许传入回调函数（类似setState）
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        
        // 保存到状态
        setStoredValue(valueToStore);
        
        // 保存到AsyncStorage
        AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error('保存到AsyncStorage失败:', error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

/**
 * 删除存储项
 * @param key 要删除的键名
 * @returns Promise<void>
 */
export const removeStorageItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('从AsyncStorage删除数据失败:', error);
    throw error;
  }
};

/**
 * 清除所有存储
 * @returns Promise<void>
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('清除AsyncStorage失败:', error);
    throw error;
  }
}; 