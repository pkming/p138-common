
import {create} from 'zustand';

// Zustand 状态管理：用于管理用户认证状态

export const useAppState = create<CommonApp.AppStateStore>(set => ({
  appState: 'active',
  globalLoading:false,
  globalLoadingText:'',
  setAppState: appState => set({appState}),
  setGlobalLoading: loading => set({ globalLoading:loading }),  
  setGlobalLoadingInfo:(loading,text) => set({ globalLoading:loading,globalLoadingText:text}),  
}));

