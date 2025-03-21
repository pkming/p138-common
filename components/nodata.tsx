import { Image, Text, View } from "react-native";
import React from "react";
import { kScreenHeight, kScreenWidth } from "p138-common/utils/fuc/fc.rn";
const NO_DATA_IMAGE = require("src/asset/jpImages/no_data.png");

export const NoData = () => (
  <View
    className="items-center justify-center"
    style={{ height: kScreenHeight * 0.7 }}
  >
    <Image
      source={NO_DATA_IMAGE}
      style={{ width: kScreenWidth * 0.2, height: kScreenWidth * 0.2 }}
    />
    <Text className="text-gray-500 mt-4 text-lg">暂无数据</Text>
  </View>
);
