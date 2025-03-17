import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Tab<T extends string | number> {
  label: string;
  key: T;
}

interface TabSwitcherProps<T extends string | number> {
  tabs: Tab<T>[]; // 只接受字典数组
  activeTab?: T; // 默认选中的 tab 的 key
  onTabPress: (key: T) => void; // 回调，返回选中的 key
  style?: any;
  numbers?: number[];
}

const TabSwitcher = <T extends string | number>({
  tabs,
  activeTab,
  onTabPress,
  style,
  numbers,
}: TabSwitcherProps<T>): React.ReactElement => {
  return (
    <View className={`flex-row bg-white ${style}`}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab.key}
          className="flex-1 items-center pt-3"
          style={{ paddingTop: 12 }}
          onPress={() => onTabPress(tab.key)}
        >
          <View className="flex-row items-center">
            <Text
              className={`text-[16px] text-gray-800 ${
                activeTab === tab.key ? "text-red-500 font-bold" : ""
              }`}
            >
              {tab.label}
            </Text>
            {(numbers && numbers[index]> 0) && (
              <View  style={{backgroundColor:'#FF0000',borderRadius:5,position:'absolute',right:-20,top:3,paddingHorizontal:2}}>
                <Text className="text-xs text-white text-center" style={{width:15}}>{numbers[index]}</Text>
              </View>
            )}
          </View>

          {activeTab === tab.key && (
            <View
              className="mt-1 h-0.5 w-1/6 bg-red-500"
              style={{
                width: 20,
                height: 1,
                backgroundColor: "red",
                marginTop: 10,
              }}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSwitcher;