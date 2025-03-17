import { ICON_SIZES } from "p138-common/utils/styles/theme";
import React from "react";
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle,
} from "react-native";

export type RightTextButtonPorps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  className?: string;
};
const RightTextButton = (props: RightTextButtonPorps) => {
  return (
    <TouchableOpacity
      style={props.style}
      className={`flex-row items-center justify-center ${props.className}`}
      activeOpacity={1}
      onPress={props.onPress}
    >
      <Text
        className="font-size-14 text-color-333 center line-height-16"
        style={[{ lineHeight: 16 }, props.textStyle]}
      >
        {props.title}{" "}
      </Text>
      <Image
        source={require("src/asset/jpImages/chat/arrow_right_grey.png")}
        style={[{width:ICON_SIZES.xsmall,height:ICON_SIZES.xsmall}, props.imageStyle]}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};
export default RightTextButton;
