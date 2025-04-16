import { kScreenHeight, kScreenWidth } from 'p138-common/utils/fuc/fc.rn';
import React, { useCallback, useRef, useState } from 'react';
import { View, Text, FlatList as RNFlatList, Image, RefreshControl, ActivityIndicator } from 'react-native';


interface FlatListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactElement;
  onRefresh?: () => Promise<void>;
  onLoadMore?: () => Promise<void>;
  loading?: boolean;
  hasMore?: boolean;
  emptyText?: string;
  emptyImage?: any;
  keyExtractor?: (item: T) => string;
  ListHeaderComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement;
  contentContainerStyle?: any;
  className?: string;
  refreshing?: boolean;
  numColumns?: number;
  horizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  onEndReachedThreshold?: number;
  ItemSeparatorComponent?: React.ComponentType<any>;
}

const NO_DATA_IMAGE = require('src/asset/imgs/no_data.png');

export function FlatList<T>({
  data,
  renderItem,
  onRefresh,
  onLoadMore,
  loading = false,
  hasMore = false,
  emptyText = '暂无数据',
  emptyImage = NO_DATA_IMAGE,
  keyExtractor,
  ListHeaderComponent,
  ListFooterComponent,
  contentContainerStyle,
  className = '',
  refreshing = false,
  numColumns = 1,
  horizontal = false,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = true,
  onEndReachedThreshold = 0.1,
  ItemSeparatorComponent,
}: FlatListProps<T>) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadingRef = useRef(false);

  const handleRefresh = useCallback(async () => {
    if (!onRefresh || loadingRef.current) return;
    
    try {
      loadingRef.current = true;
      setIsRefreshing(true);
      await onRefresh();
    } finally {
      loadingRef.current = false;
      setIsRefreshing(false);
    }
  }, [onRefresh]);

  const handleLoadMore = useCallback(async () => {
    if (!onLoadMore || loadingRef.current || !hasMore || data.length === 0) return;
    
    try {
      loadingRef.current = true;
      setIsLoadingMore(true);
      await onLoadMore();
    } finally {
      loadingRef.current = false;
      setIsLoadingMore(false);
    }
  }, [onLoadMore, hasMore, data.length]);

  const renderFooter = () => {
    if (data.length === 0) return null;
    
    if (!hasMore) {
      return (
        <View className="items-center justify-center py-4">
          <Text className="text-gray-500 text-sm">无更多数据</Text>
        </View>
      );
    }
    
    if (isLoadingMore) {
      return (
        <View className="items-center justify-center py-4">
          <ActivityIndicator size="small" color="#999" />
        </View>
      );
    }
    
    return null;
  };

  const renderEmpty = () => {
    if (loading) {
      return (
        <View
          className="items-center justify-center"
          style={{ height: kScreenHeight * 0.7 }}
        >
          <ActivityIndicator size="large" color="#999" />
        </View>
      );
    }

    return (
      <View
        className="items-center justify-center"
        style={{ height: '100%' }}
      >
        <Image
          source={emptyImage}
          style={{ width: kScreenWidth * 0.2, height: kScreenWidth * 0.2 }}
        />
        <Text className="text-gray-500 mt-4 text-lg">{emptyText}</Text>
      </View>
    );
  };

  return (
    <RNFlatList
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent || renderFooter}
      ListEmptyComponent={renderEmpty}
      refreshControl={
        onRefresh ? (
          <RefreshControl 
            refreshing={isRefreshing || refreshing} 
            onRefresh={handleRefresh}
            tintColor="#999"
            title="下拉刷新"
            titleColor="#999"
          />
        ) : undefined
      }
      onEndReached={handleLoadMore}
      onEndReachedThreshold={onEndReachedThreshold}
      contentContainerStyle={[
        contentContainerStyle,
      ]}
      className={className}
      numColumns={numColumns}
      horizontal={horizontal}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
} 