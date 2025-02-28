import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO_KEY } from "p138-common/config/dev";
import { loadUserData } from "p138-common/utils/auth";

// Zustand 状态管理：用于管理用户认证状态
interface UserStore {
  loggedIn: boolean;
  userLoginInfo?: ServerCommonAuth.UserSignInResult;
  useBaseInfo?: ServerCommonUser.User;
  shopInfo?: ServerCommonShop.LotteryShop;
  setLoggedIn: (loggedIn: boolean) => void;
  setUserLoginInfo: (userLoginInfo: ServerCommonAuth.UserSignInResult) => void;
  setUserBaseInfo: (useBaseInfo: ServerCommonUser.User) => void;
  loadUserData: (userLoginInfo: ServerCommonAuth.UserSignInResult) => void;
  resetStore: () => void;
  setShopInfo: (shopInfo: ServerCommonShop.LotteryShop) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      loggedIn: true,
      userLoginInfo: {} as ServerCommonAuth.UserSignInResult,
      useBaseInfo: undefined,
      token: null,
      shopInfo: undefined,
      setLoggedIn: (loggedIn) => set({ loggedIn }),
      setUserLoginInfo: (userLoginInfo) => {
        AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userLoginInfo));
        set({ userLoginInfo });
      },
      setUserBaseInfo: (useBaseInfo) =>
        set({
          useBaseInfo,
        }),
      setShopInfo: (shopInfo) => set({ shopInfo }),
      loadUserData: async (userLoginInfo) => {
        const { loggedIn, useBaseInfo } = await loadUserData(userLoginInfo);
        if (useBaseInfo) {
          set({
            loggedIn,
            useBaseInfo,
          });
        }
      },
      resetStore: () => {
        set({
          loggedIn: false,
          shopInfo: undefined,
          useBaseInfo: undefined,
        });
        AsyncStorage.removeItem(USER_INFO_KEY);
      },
    }),
    {
      name: "auth-storage", // 用于存储的键，保证每次读取/存储时都能识别
      storage: createJSONStorage(() => AsyncStorage), // 使用 createJSONStorage 来包装 AsyncStorage
    }
  )
);
