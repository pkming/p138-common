import {create} from 'zustand';

/**
 * 全局应用状态管理 hook
 * 
 * 用于管理:
 * - 应用前台/后台状态
 * - 全局加载状态
 * - 全局加载提示文本
 */
export const useAppState = create<CommonApp.AppStateStore>(set => ({
  appState: 'active',
  globalLoading: false,
  globalLoadingText: '',
  setAppState: appState => set({appState}),
  setGlobalLoading: loading => set({ globalLoading: loading }),  
  setGlobalLoadingInfo: (loading, text) => set({ globalLoading: loading, globalLoadingText: text }),  
}));

