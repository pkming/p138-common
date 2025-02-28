import { ICON_SIZES } from 'p138-common/utils/styles/theme';
import React from 'react';
import { Image } from 'react-native';
import { StyleProp, ImageStyle} from 'react-native';

type IconType = 'upAndDown' | 'helpUpAndDown' | 'leftAndRight';
// 定义 Props 类型
interface ArrowIconProps {
  isTap: boolean;
  style?: StyleProp<ImageStyle>;
  iconType?: IconType;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  isTap,
  style,
  iconType = 'upAndDown',
}) => {
  const rotation = isTap ? '180deg' : '0deg';
  const iconMap: Record<IconType, number> = {
    helpUpAndDown: require('src/asset/jpimgs/home/icon_home_help_down.png'),
    upAndDown: require('src/asset/jpimgs/lottery/arrow_up_grey.png'),
    leftAndRight: require('src/asset/jpimgs/lottery/arrow_up_grey.png'),
  };
  return (
    <Image
      style={[{width:ICON_SIZES.small, height:ICON_SIZES.small}, {transform: [{rotate: rotation}]},style]}
      source={iconMap[iconType]}
    />
  );
};



export default ArrowIcon;
