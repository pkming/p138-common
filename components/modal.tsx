import { Image } from 'expo-image';
import { kScreenHeight, kScreenWidth } from 'p138-common/utils/fuc/fc.rn';
import React from 'react';
import { TouchableOpacity, Modal, StyleSheet, View } from 'react-native';

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
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType={position === 'bottom' ? 'slide' : 'fade'}
      onRequestClose={onClose}>
      <TouchableOpacity
        // disabled={disabled}
        style={[
          styles.overlay,
          position === 'bottom' && { justifyContent: 'flex-end' },
          position === 'right' && { flexDirection: 'row', justifyContent: 'flex-end' },
        ]}
        activeOpacity={1}
        onPress={onClose}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={1}
          className='justify-center items-center w-full'>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {children}
          </View>
        </TouchableOpacity>
        {disabled && (
          <TouchableOpacity
            // activeOpacity={1}
            onPress={onClose}>
            <Image
              source={require('src/asset/imgs/close2.png')}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
