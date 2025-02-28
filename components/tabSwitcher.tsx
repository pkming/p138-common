import React  from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Tab<T extends string|number> {
  label: string;
  key: T;
}

interface TabSwitcherProps<T extends string|number> {
  tabs: Tab<T>[]; // 只接受字典数组
  activeTab?: T; // 默认选中的 tab 的 key
  onTabPress: (key: T) => void; // 回调，返回选中的 key
  style?: StyleProp<ViewStyle>;
}

const TabSwitcher = <T extends string|number>({
  tabs,
  activeTab,
  onTabPress,
  style,
}: TabSwitcherProps<T>): React.ReactElement => {


  console.log(activeTab,'====');
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tabItem}
          onPress={() => onTabPress(tab.key)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.key && styles.activeTabText,
            ]}
          >
            {tab.label}
          </Text>
          {activeTab === tab.key && <View style={styles.activeTabUnderline} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSwitcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 12,
    color: '#333',
  },
  activeTabText: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  activeTabUnderline: {
    height: 1, // 下划线高度
    width: '15%', // 控制下划线长度，可以用百分比或固定值
    backgroundColor: '#f44336',
    marginTop: 5,
  },
});
