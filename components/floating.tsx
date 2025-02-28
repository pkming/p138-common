import React, {useRef} from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import commonStyles from 'src/styles';
import {themeRedColor} from 'src/styles/color';

const {height} = Dimensions.get('window'); // 获取屏幕高度

const FloatingButton: React.FC = () => {
  const navigation = useNavigation(); // 获取 navigation 对象
  const panY = useRef(new Animated.Value((height * 3) / 4)).current; // 初始 Y 轴位置
  const currentY = useRef(0); // 用于记录当前的 Y 轴位置
  const isDragging = useRef(false); // 标记是否正在拖拽
  const startTime = useRef(0); // 手势开始时间
  const startY = useRef(0); // 手势开始时的 Y 轴位置

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // 启用手势响应
    onPanResponderGrant: (_, gestureState) => {
      isDragging.current = false; // 初始化为非拖拽
      startTime.current = Date.now(); // 记录手势开始时间
      startY.current = gestureState.y0; // 记录手势开始时的位置
      panY.stopAnimation(value => {
        currentY.current = value; // 记录当前位置
      });
    },
    onPanResponderMove: (_, gestureState) => {
      // 计算手指移动的距离
      const distance = Math.abs(gestureState.moveY - startY.current);
      if (distance > 5) {
        isDragging.current = true; // 如果移动距离大于 5，则认为是拖拽
      }
      if (isDragging.current) {
        // 实时更新拖拽位置
        const newY = Math.min(
          Math.max(currentY.current + gestureState.dy, 0), // 限制顶部
          height - 100, // 限制底部
        );
        panY.setValue(newY); // 设置新的位置
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      const distance = Math.abs(gestureState.moveY - startY.current);
      const duration = Date.now() - startTime.current; // 手势持续时间
      console.log(duration, distance);
      if (!isDragging.current && duration < 200) {
        // 如果手指移动距离小于 5 且时间小于 200ms，认为是点击
        handlePress();
      } else {
        // 吸附到合法位置
        const finalY = Math.min(
          Math.max(currentY.current + gestureState.dy, 0),
          height - 100,
        );
        Animated.spring(panY, {
          toValue: finalY,
          useNativeDriver: false,
        }).start(() => {
          currentY.current = finalY; // 更新当前位置
        });
      }
    },
  });

  const handlePress = () => {
    // 处理点击事件
    navigation.navigate('SingleChat'); // 跳转到目标页面
  };

  return (
    <Animated.View
      style={[
        styles.floatingButton,
        commonStyles.row,
        commonStyles.center,
        commonStyles.bgWhite,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          transform: [{translateY: panY}], // 动画样式
          right: 0, // 固定在屏幕右侧
        },
      ]}
      {...panResponder.panHandlers} // 绑定手势事件
    >
      <View
        style={[
          styles.touchableContent,
          commonStyles.row,
          commonStyles.center,
        ]}>
        <FastImage
          source={require('src/asset/jpimgs/home/icon_message_float.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 25, height: 25}}
        />
        <View>
          <Text style={styles.buttonText}>联系</Text>
          <Text style={styles.buttonText}>店主</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    width: 70,
    height: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // 安卓阴影
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  touchableContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: themeRedColor,
    fontSize: 10,
    paddingHorizontal: 8,
  },
});

export default FloatingButton;
