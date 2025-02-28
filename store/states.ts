import {AppStateStatus} from 'react-native';
import {create} from 'zustand';

// Zustand 状态管理：用于管理用户认证状态
interface AppStateStore {
  appState: AppStateStatus;
  loading: boolean;  // 新增的 loading 状态
  text?:string;
  setLoading: (loading: boolean) => void;  // 用于更新 loading 状态
  setLoadingInfo: (loading: boolean,text?:string) => void;  // 用于更新 loading 状态
  setAppState: (appState:AppStateStatus) => void;
}

export const useAppStateStore = create<AppStateStore>(set => ({
  appState: 'active',
  loading:false,
  setAppState: appState => set({appState}),
  setLoading: loading => set({ loading }),  // 更新 loading 状态
  setLoadingInfo:(loading,text) => set({ loading,text}),  // 用于更新 loading 状态
}));

