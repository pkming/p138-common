import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

export type ToastProps = {
  message: string;
  duration?: number; // 显示时间（毫秒）
  type?: 'success' | 'error' | 'info'; // Toast 类型
  customStyle?: object; // 自定义样式
};

const Toast: React.FC = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);
  const opacity = useRef(new Animated.Value(0)).current;

  const show = (message: string, options?: Partial<ToastProps>) => {
    setToast({message, ...options});
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setToast(null));
    }, options?.duration || 2000);
  };

  useEffect(() => {
    globalThis.Toast = {show}; // 将 `show` 挂载到全局
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!toast) {return null;}

  return (
    <Animated.View style={[styles.toastContainer, {opacity}]}>
      <View
        style={[
          styles.toast,
          toast.type === 'success' && styles.success,
          toast.type === 'error' && styles.error,
          toast.type === 'info' && styles.info,
          toast.customStyle,
        ]}>
        <Text style={styles.message}>{toast.message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -150}, {translateY: -40}], // 将 Toast 居中
    width: 300, // 设置固定宽度
    alignItems: 'center',
    zIndex: 1000,
  },
  toast: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  success: {
    backgroundColor: '#4caf50',
  },
  error: {
    backgroundColor: '#f44336',
  },
  info: {
    backgroundColor: '#2196f3',
  },
});

export default Toast;
