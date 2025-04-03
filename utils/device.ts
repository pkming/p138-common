/**
 * 设备工具函数
 */

// 生成设备ID
export function getDeviceId(): string {
  // 从localStorage获取已存在的设备ID
  let deviceId = localStorage.getItem('@p138/device/id');
  
  // 如果没有设备ID，生成一个新的
  if (!deviceId) {
    // 使用时间戳和随机数生成设备ID
    deviceId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    // 保存到localStorage
    localStorage.setItem('@p138/device/id', deviceId);
  }
  
  return deviceId;
} 