import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Eye from 'src/asset/svg/eye.svg';
import EyeClose from 'src/asset/svg/eye-close.svg';

// 定义 Props 类型
interface CustomTextInputProps extends TextInputProps {
  label?: string; // 输入框的标签
  error?: string; // 错误提示信息
  secure?: boolean; // 是否为密码输入框
  value: string; // 输入框的值
  onChangeText: (text: string) => void; // 输入内容变化时的回调
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ZTextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  secure = false,
  value,
  textStyle,
  onChangeText,
  containerStyle,
  ...props
}) => {
  const [isSecure, setIsSecure] = React.useState(secure);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* 标签 */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* 输入框及可见图标 */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            error && {borderColor: '#f53b57'}, // 如果有错误，则改变边框颜色
            textStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#ccc'}
          secureTextEntry={isSecure}
          {...props}
        />
        {secure && (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setIsSecure(!isSecure)}>
            {!isSecure ? (
              <Eye width={20} height={20} fill={'#666'} />
            ) : (
              <EyeClose width={20} height={20} fill={'#666'} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* 错误提示 */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#333',
    backgroundColor: '#f0f0f0',
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    color: '#f53b57',
    marginTop: 5,
  },
});

export default ZTextInput;
