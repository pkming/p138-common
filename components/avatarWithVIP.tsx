import { defaultImage } from 'src/api/env.config';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';


type AvatarWithVIPProps = {
  avatar: string;
  vipIndex: number;
};

const AvatarWithVIP = ({avatar, vipIndex}: AvatarWithVIPProps) => {
  const vipIcon = [
    require('src/asset/jpimgs/mine/logo_lv0.png'),
    require('src/asset/jpimgs/mine/logo_lv1.png'),
    require('src/asset/jpimgs/mine/logo_lv2.png'),
    require('src/asset/jpimgs/mine/logo_lv3.png'),
    require('src/asset/jpimgs/mine/logo_lv4.png'),
    require('src/asset/jpimgs/mine/logo_lv5.png'),
    require('src/asset/jpimgs/mine/logo_lv6.png'),
    require('src/asset/jpimgs/mine/logo_lv7.png'),
    require('src/asset/jpimgs/mine/logo_lv8.png'),
    require('src/asset/jpimgs/mine/logo_lv9.png'),
    require('src/asset/jpimgs/mine/logo_lv10.png'),
  ];
  return (
    <View>
      <Image
        source={{uri: avatar || defaultImage}}
        style={styles.avatar}
        resizeMode="stretch"
      />
      <Image source={vipIcon[vipIndex]} style={styles.vipIcon} resizeMode="stretch"/>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  vipIcon: {
    position: 'absolute',
    bottom: -5,
    left: 0,
    width: 40,
    height: 15,
  },
});

export default AvatarWithVIP;
