// src/utils/authUtils.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserBasicInfoApi } from 'p138-common/api/client/interface/users-auth';

// import { get } from 'src/api/interface/audit';

// import= { get, getToken } from 'src/api/interface/users_auth';

// 加载用户数据的函数
export const loadUserData = async (
  userLoginInfo: ServerCommonAuth.UserSignInResult,
  retryCount: number = 2,
) => {
  const {userID, username,shopCode} = userLoginInfo;
  if (!userID) {
    console.log('No token found, user is not logged in');
    return {loggedIn: false};
  }

  try {
    const useBaseInfo = await getUserBasicInfoApi(
      {userID},
      {
        'X-Shop-Code':  shopCode || 0,
        'X-User-Type': 1,
        'X-Username': username,
      },
    );
    // const token = await getToken(
    //   {userID},
    //   {
    //     'X-Shop-Code': shopCode || 0,
    //     'X-User-Type': 2,
    //     'X-Username': username,
    //   },
    // );
    console.log('User info fetched successfully:', useBaseInfo);
    return {loggedIn: true, useBaseInfo: useBaseInfo.data};
  } catch (error: any) {
    if (error.code === 'TOKEN_EXPIRED' && retryCount > 0) {
      console.log('Token expired, retrying...');
      try {
        // const newToken = await getToken(
        //   {userID},
        //   {
        //     'X-Shop-Code': shopCode || 0,
        //     'X-User-Type': 1,
        //     'X-Username': username,
        //   },
        // );
        // console.log('Token refreshed, new token:', newToken);

        const userBaseInfo = await getUserBasicInfoApi(
          {userID},
          {
            'X-Shop-Code': shopCode || 0 ,
            'X-User-Type': 1,
            'X-Username': username,
          },
        );
        return {
          loggedIn: true,
          userBaseInfo: userBaseInfo.data,
          // token: newToken.data,
        };
      } catch (refreshError) {
        console.log('Token refresh failed:', refreshError);
        return {loggedIn: false, userBaseInfo: undefined, token: undefined};
      }
    }
    console.log('Other error occurred:', error);
    return {loggedIn: true, userBaseInfo: undefined, token: undefined};
  }
};

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error('Error saving token', error);
  }
};
