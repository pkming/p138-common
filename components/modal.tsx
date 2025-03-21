import { Image } from 'expo-image';
import { kScreenWidth } from 'p138-common/utils/fuc/fc.rn';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal, Animated, StyleSheet } from 'react-native';

interface CustomModalProps {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom' | 'right';
  disabled?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  children,
  position = 'center',
  disabled = false,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // 初始透明度为 0
  const [scaleAnim] = useState(new Animated.Value(0.8)); // 初始缩放为 0.8
  const [childrenFadeAnim] = useState(new Animated.Value(0)); // 初始化children的透明度
  const [translateXAnim] = useState(new Animated.Value(kScreenWidth)); // 初始位置在屏幕右侧

  useEffect(() => {
    if (isVisible) {
      // 打开动画
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(childrenFadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateXAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // 关闭动画
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(childrenFadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateXAnim, {
          toValue: kScreenWidth,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible, fadeAnim, scaleAnim, childrenFadeAnim, translateXAnim]);

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType={position === 'bottom' ? 'slide' : 'fade'}
      onRequestClose={onClose}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.overlay,
          { opacity: fadeAnim, width: '100%' },
          position === 'bottom' && { justifyContent: 'flex-end' },
          position === 'right' && { flexDirection: 'row', justifyContent: 'flex-end' },
        ]} // 控制背景透明度
        activeOpacity={1}
        onPress={onClose}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={1}
          className='justify-center items-center w-full'>
          <Animated.View
            style={[
              {
                transform: [{ scale: scaleAnim }],
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              },
              position === 'right' && { transform: [{ translateX: translateXAnim }] },
            ]} // 控制模态框缩放和位移
          >
            {children}
          </Animated.View>
        </TouchableOpacity>
        {disabled && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onClose}>
            <Image
              source={require('src/asset/jpImages/close2.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景颜色
    width: kScreenWidth,
    height: '100%',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomModal;
