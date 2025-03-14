import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_INFO_KEY } from "p138-common/config/dev";
import { loadUserData } from "p138-common/utils/auth";

export const useUserInfo = create<CommonUser.UserStore>()(
  persist(
    (set) => ({
      loggedIn: true,
      userLoginInfo: {} as ServerCommonAuth.UserSignInResult,
      userBaseInfo: undefined,
      token: null,
      shopInfo: undefined,
      setLoggedIn: (loggedIn) => set({ loggedIn }),
      setUserLoginInfo: (userLoginInfo) => {
        AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(userLoginInfo));
        set({ userLoginInfo });
      },
      setUserBaseInfo: (userBaseInfo) =>
        set({
          userBaseInfo,
        }),
      setShopInfo: (shopInfo) => set({ shopInfo }),
      loadUserData: async (userLoginInfo) => {
        const { loggedIn, userBaseInfo } = await loadUserData(userLoginInfo);
        if (userBaseInfo) {
          set({
            loggedIn,
            userBaseInfo,
          });
        }
      },
      resetStore: () => {
        set({
          loggedIn: false,
          shopInfo: undefined,
          userBaseInfo: undefined,
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
