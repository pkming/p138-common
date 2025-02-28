import React from 'react';
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle,
} from 'react-native';
import commonStyles from 'src/styles';

export type RightTextButtonPorps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};
const RightTextButton = (props: RightTextButtonPorps) => {
  return (
    <TouchableOpacity
      style={[commonStyles.alignCenter, commonStyles.row, props.style]}
      activeOpacity={1}
      onPress={props.onPress}>
      <Text
        style={[
          commonStyles.fontSize14,
          commonStyles.fontColor333,
          commonStyles.center,
          {lineHeight: 16},
          props.textStyle,
        ]}>
        {props.title}{' '}
      </Text>
      <Image
        source={require('src/asset/jpimgs/chat/arrow_right_grey.png')}
        style={[commonStyles.iconSize12,props.imageStyle]}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};
export default RightTextButton;
