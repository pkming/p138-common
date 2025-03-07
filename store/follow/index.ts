import {create} from 'zustand';

// 定义 Item 类型
export type Item = {
  id: string;
  avatar: string;
  vipIcon: string;
  name: string;
  consecutiveWins: number;
  followers: number;
  expectedReturn: string;
  winRate: string;
  winRateExplanation: string; // 修改为 string 类型
  description: string;
  stats: {label: string; value: string}[];
  deadline: string;
  profit?: string; // 添加 profit 字段，可选
};

type FollowStore = {
  data: Item[]; // 数据存储
  selectedTabIndex: number; // 当前选中的 Tab 索引
  selectedFilterIndex: number; // 当前选中的筛选项索引
  followedItems: string[]; // 关注的项目 ID 列表

  setData: (data: Item[]) => void; // 设置数据的函数
  setSelectedTabIndex: (index: number) => void; // 更新 Tab 索引
  setSelectedFilterIndex: (index: number) => void; // 更新筛选项索引
  addFollowedItem: (id: string) => void; // 添加关注项
  removeFollowedItem: (id: string) => void; // 移除关注项
};

export const useFollow = create<FollowStore>(set => ({
  data: [], // 默认数据为空
  selectedTabIndex: 0,
  selectedFilterIndex: 0,
  followedItems: [],
  setData: data => set({data}), // 更新数据
  setSelectedTabIndex: index => set({selectedTabIndex: index}),
  setSelectedFilterIndex: index => set({selectedFilterIndex: index}),
  addFollowedItem: id =>
    set(state => ({
      followedItems: [...state.followedItems, id],
    })),
  removeFollowedItem: id =>
    set(state => ({
      followedItems: state.followedItems.filter(item => item !== id),
    })),
}));
