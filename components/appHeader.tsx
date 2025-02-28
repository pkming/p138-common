import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // 引入 useNavigation
import {ViewStyle} from 'react-native';
import { Image } from 'react-native';
interface AppHeaderProps {
  title: string; // 标题文字
  onBackPress?: () => void; // 返回按钮点击事件
  leftComponent?: React.ReactNode; // 左侧自定义组件
  rightComponent?: React.ReactNode; // 右侧自定义组件
  titleDes?: string; //可以点击的副标题
  style?: StyleProp<ViewStyle>;
  titleDesOnPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onBackPress,
  leftComponent,
  rightComponent,
  titleDes,
  style,
  titleDesOnPress,
}) => {
  const navigation = useNavigation(); // 获取 navigation 对象
  const defaultBackPress = () => {
    onBackPress ? onBackPress() : navigation.goBack();
  };
  return (
    <View style={[styles.container, style]}>
      {/* 左侧组件 */}
      <View style={styles.left}>
        {leftComponent ? (
          leftComponent
        ) : (
          <TouchableOpacity
            onPress={defaultBackPress}
            style={styles.backButton}>
            <Image
              style={styles.backImg}
              source={require('src/asset/jpimgs/home/icon_back_arrow.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* 标题 */}
      <View className="flex-row items-center justify-center">
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {titleDes && (
          <TouchableOpacity className='bg-white rounded-2px p-1' onPress={titleDesOnPress}>
            <Text className='text-white text-sm' numberOfLines={1}>
              {titleDes}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 右侧组件 */}
      <View className='flex-1 items-end'>
        {rightComponent || <View className='w-5' />}
        {/* 保持对称占位 */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#f44336',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  helpRoot: {
    borderRadius: 2,
    marginLeft: 2,
    paddingVertical: 1,
    paddingHorizontal: 4,
    backgroundColor: '#fff',
  },
  helpText: {
    fontSize: 10,
    color: '#f44336',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 5,
  },
  backImg: {
    width: 18,
    height: 23,
  },
  centerRoot: {
    flexDirection: 'row',
    width: 150,
  },
  title: {
    // flex: 1, // 占据中间空间
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // 确保文字居中
  },

});

export default AppHeader;
