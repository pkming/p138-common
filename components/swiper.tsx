import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { router, useFocusEffect } from "expo-router";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { listAdApi } from "src/api/interface/ad";
const defaultHeight = 140;
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.95;

const CarouselComponent = (props: {
  style?: StyleProp<ViewStyle>;
  className?: string;
  appType: number;
}) => {
  const [bannerList, setBannerList] = useState<ServerCommonAd.Ad[]>([]);

  useEffect(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      listAdApi({
        appType: props.appType as CommonCommonEnum.AppType,
        adType:5,
      }).then((res) => {
        setBannerList(res.data || []);
      });
    }, [])
  );

  const goto = (item: ServerCommonAd.Ad) => {
    switch (item.redirectType) {
      case 1:
        router.push({
          pathname: item.redirectUrl || "/home/notice",
          params: {
            item: JSON.stringify(item),
          },
        });
        break;
      case 2:
        break;
      default:
        router.push({
          pathname: item.redirectUrl || "/home/notice",
          params: {
            item: JSON.stringify(item),
          },
        });
        break;
    }
  };

  const renderItem = ({ item }: { item: ServerCommonAd.Ad }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.root}
      onPress={() => goto(item)}
      activeOpacity={1}
    >
      <Image
        source={{ uri: item.imageUrl.replace(/^https:\/\//i, "http://") }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  if (bannerList.length === 0) {
    return null;
  }
  return (
    <View
      style={[{ height: defaultHeight }, props.style]}
      className={`${props.className} justify-center items-center`}
    >
      {/* {bannerList.length > 0 && <Image
                source={{uri: bannerList[0]?.imageUrl}}
                style={styles.image}
                resizeMode="contain"
              />} */}
      {bannerList && bannerList.length > 0 && (
        <SwiperFlatList
          data={bannerList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={0}
          showPagination
          paginationStyle={styles.pagination}
          paginationStyleItem={styles.dot}
          paginationActiveColor="white"
          paginationDefaultColor="rgba(255, 255, 255, 0.5)"
          style={styles.swiper}
          bounces={false}
          scrollEnabled={true}
          removeClippedSubviews={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          snapToAlignment="start"
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
        />
      )}
    </View>
  );
};

export default CarouselComponent;
const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    overflow: "hidden",
    height: defaultHeight,
    width: ITEM_WIDTH,
  },
  image: {
    width: ITEM_WIDTH,
    height: defaultHeight,
  },
  swiper: {
    width: ITEM_WIDTH,
    height: defaultHeight,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
