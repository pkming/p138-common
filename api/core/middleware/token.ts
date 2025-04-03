/**
 * Token中间件
 * 处理token的添加和刷新
 */


import dayjs from 'dayjs';
import { STORAGE_KEYS } from 'p138-common/config';

// 刷新token的状态管理
const tokenState = {
  isRefreshing: false,
  refreshPromise: null as Promise<boolean> | null,
  isLoggingOut: false
};

/**
 * 执行登出操作
 */
function executeLogout(config: P138Api.IBaseConfig) {
  if (!tokenState.isLoggingOut) {
    tokenState.isLoggingOut = true;
    config.logout();
  }
}

/**
 * 设置请求头中的Authorization
 */
function setAuthorizationHeader(request: P138Api.IMiddlewareContext['request'], token: ServerCommonAuth.OAuthToken) {
  if (!request) return;
  request.header = {
    ...request.header,
    Authorization: `${token.token_type.charAt(0).toUpperCase() + token.token_type.slice(1)} ${token.access_token}`,
  };
}

/**
 * 刷新token
 */
async function refreshToken(config: P138Api.IBaseConfig): Promise<boolean> {
  // 如果已经在刷新，返回同一个Promise
  if (tokenState.isRefreshing) {
    return tokenState.refreshPromise || Promise.resolve(false);
  }

  tokenState.isRefreshing = true;
  tokenState.refreshPromise = (async () => {
    try {
      const oAuthToken: ServerCommonAuth.OAuthToken = JSON.parse(await config.storage.getItem(STORAGE_KEYS.OAUTH_TOKEN) || '{}');
      if (!oAuthToken?.refresh_token) {
        executeLogout(config);
        return false;
      }

      const response = await config.refreshTokenApi(oAuthToken.refresh_token);
      if (response?.data) {
        config.storage.setItem(STORAGE_KEYS.OAUTH_TOKEN, JSON.stringify(response.data));
        console.log('Token刷新成功');
        return true;
      }
      executeLogout(config);
      return false;
    } catch (error) {
      console.error('Token刷新失败:', error);
      executeLogout(config);
      return false;
    } finally {
      tokenState.isRefreshing = false;
      tokenState.refreshPromise = null;
      tokenState.isLoggingOut = false;
    }
  })();

  return tokenState.refreshPromise;
}

/**
 * 检查token是否过期
 */
function isTokenExpired(token: ServerCommonAuth.OAuthToken): boolean {
  if (!token?.expiry) return true;
  const now = dayjs();
  const expiry = dayjs(token.expiry);
  const isExpired = now.isAfter(expiry);
  
  console.log('Token状态:', {
    当前时间: now.format('YYYY-MM-DD HH:mm:ss'),
    过期时间: expiry.format('YYYY-MM-DD HH:mm:ss'),
    是否过期: isExpired
  });
  
  return isExpired;
}

/**
 * 获取并解析token
 */
async function getToken(config: P138Api.IBaseConfig): Promise<ServerCommonAuth.OAuthToken | null> {
  const tokenStr = await config.storage.getItem(STORAGE_KEYS.OAUTH_TOKEN);
  if (!tokenStr) {
    console.log('未找到token');
    return null;
  }
  return JSON.parse(tokenStr);
}

export const tokenMiddleware: P138Api.IMiddleware = {
  name: 'token',
  async onRequest(context) {
    const { request, config } = context;
    if (!request) return;
    
    // 跳过不需要token的请求
    if (request.url.includes('oauth2/refresh-token') || 
        request.url.includes('login') || 
        request.url.includes('logout')) {
      return;
    }

    const token = await getToken(config);
    if (!token) return;

    if (isTokenExpired(token)) {
      console.log('Token已过期，开始刷新');
      const refreshSuccess = await refreshToken(config);
      
      if (!refreshSuccess) {
        console.log('Token刷新失败，执行登出');
        return;
      }

      const newToken = await getToken(config);
      if (newToken) {
        setAuthorizationHeader(request, newToken);
      }
    } else {
      console.log('Token未过期，直接使用');
      setAuthorizationHeader(request, token);
    }
  },

  async onResponse(context) {
    const { response, config } = context;
    if (!response?.data?.data?.oAuthToken) return;

    const token = response.data.data.oAuthToken;
    // token.expiry = dayjs().add(1, 'minute').toISOString();
    
    config.storage.setItem(STORAGE_KEYS.OAUTH_TOKEN, JSON.stringify(token));
    console.log('保存新token，过期时间:', dayjs(token.expiry).format('YYYY-MM-DD HH:mm:ss'));
  },

  async onError(context) {

  },
};
