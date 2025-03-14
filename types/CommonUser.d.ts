declare namespace CommonUser {
  // Zustand 状态管理：用于管理用户认证状态
  interface UserStore {
    /**是否登录*/
    loggedIn: boolean;
    /**用户登录信息*/
    userLoginInfo?: ServerCommonAuth.UserSignInResult;
    /**用户基础信息*/
    userBaseInfo?: ServerCommonUser.User;
    /**店铺信息*/
    shopInfo?: ServerCommonShop.LotteryShop;
    /**设置是否登录*/
    setLoggedIn: (loggedIn: boolean) => void;
    /**设置用户登录信息*/
    setUserLoginInfo: (
      userLoginInfo: ServerCommonAuth.UserSignInResult
    ) => void;
    /**设置用户基础信息*/
    setUserBaseInfo: (userBaseInfo: ServerCommonUser.User) => void;
    /**加载用户数据*/
    loadUserData: (userLoginInfo: ServerCommonAuth.UserSignInResult) => void;
    /**重置store*/
    resetStore: () => void;
    /**设置店铺信息*/
    setShopInfo: (shopInfo: ServerCommonShop.LotteryShop) => void;
  }
}
