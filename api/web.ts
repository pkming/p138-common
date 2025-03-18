/**
 * P138通用API框架
 */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// ====== 常量 ======
export const TOKEN_KEY = 'auth_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
const AsyncStorage = window.localStorage;

// ====== 类型定义 ======

/**p
 * API命名空间
 */
export namespace P138Api {
  /**
   * 分页信息
   */
  export interface Pagination {
    current: number;
    pageSize: number;
    total: number;
    pages: number;
  }

  /**
   * 分页响应
   */
  export interface PagedResponse<T> {
    list: T[];
    pagination: Pagination;
  }

  /**
   * API成功响应
   */
  export interface ApiResponse<T> {
    data: T;
    success: true;
    message?: string;
    requestID?: string;
  }

  /**
   * API错误
   */
  export interface ApiError {
    code: number;
    message: string;
    type: string;
  }

  /**
   * API错误响应
   */
  export interface ErrorResponse {
    error: ApiError;
    requestID: string;
    success: false;
    data: null;
  }

  /**
   * 标准响应包装类型
   */
  export type ResponseWrapper<T> = ApiResponse<T> | ErrorResponse;

  /**
   * 排序方向
   */
  export type SortDirection = 'asc' | 'desc';

  /**
   * 排序参数
   */
  export interface SortParams {
    sort?: string;
    direction?: SortDirection;
  }

  /**
   * 查询参数
   */
  export interface QueryParams {
    keyword?: string;
    current?: number;
    pageSize?: number;
  }

  /**
   * 时间范围参数
   */
  export interface TimeRangeParams {
    startTime?: string;
    endTime?: string;
  }

  /**
   * 通用查询参数
   */
  export interface CommonQueryParams extends QueryParams, SortParams, TimeRangeParams {}
}

/**
 * 错误响应类型
 */
export interface ZYError {
  error: {
    code: number;
    message: string;
    type: string;
  };
  requestID: string;
  success: boolean;
}

/**
 * 请求配置接口
 */
export interface RequestProps<
  TQuery = Record<string, any>,
  TData = Record<string, any>,
  THeader = any,
> {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  query?: TQuery;
  data?: TData;
  header?: THeader;
  ignoreAuth?: boolean;
  onError?: (error: any) => boolean;
}

/**
 * API客户端配置
 */
export interface ApiClientConfig {
  // 基础URL
  baseURL: string;
  // 超时时间
  timeout?: number;
  // 应用版本号
  appVersion?: string;
  // 退出登录回调
  onLogout?: () => void;
  // 显示消息回调
  onShowToast?: (message: string) => void;
  // 刷新Token的URL路径
  refreshTokenPath?: string;
}

// ====== Token管理 ======

/**
 * 获取访问令牌
 */
export async function getToken(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('获取Token失败');
    return null;
  }
}

/**
 * 保存访问令牌
 */
export async function setToken(token: string): Promise<void> {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('保存Token失败');
  }
}

/**
 * 获取刷新令牌
 */
export async function getRefreshToken(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
  } catch (error) {
    console.error('获取刷新Token失败');
    return null;
  }
}

/**
 * 保存刷新令牌
 */
export async function setRefreshToken(refreshToken: string): Promise<void> {
  try {
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  } catch (error) {
    console.error('保存刷新Token失败');
  }
}

/**
 * 清除所有令牌
 */
export async function clearTokens(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY]);
  } catch (error) {
    console.error('清除Token失败');
  }
}

/**
 * 创建API客户端
 * 所有项目特定的配置都必须由具体项目提供
 */
export function createApiClient(config: ApiClientConfig) {
  // ====== 回调函数 ======
  let onLogout = config.onLogout;
  let onShowToast = config.onShowToast;

  // 设置默认刷新Token路径
  const refreshTokenPath = config.refreshTokenPath || '/api/v1/auth/refresh-token';

  // 处理登出
  async function handleLogout(): Promise<void> {
    await clearTokens();
    if (onLogout) {
      onLogout();
    }
  }

  // ====== Axios实例创建 ======
  const apiClient = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout || 15000,
    headers: {
      'Content-Type': 'application/json',
      'X-Platform': 'web',
    },
  });

  // 如果有应用版本号，添加到请求头
  if (config.appVersion) {
    apiClient.defaults.headers.common['X-App-Version'] = config.appVersion;
  }

  // ====== 拦截器配置 ======

  // 请求拦截器
  apiClient.interceptors.request.use(
    async (config) => {
      // 添加认证头
      if (config.headers?.ignoreAuth !== true) {
        const token = await getToken();
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      // 移除特殊标记
      if (config.headers) {
        delete config.headers.ignoreAuth;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  // 响应拦截器
  apiClient.interceptors.response.use(
    (response) => {
      // 检查响应是否成功
      if (response.data?.success) {
        return response;
      } else {
        // 业务逻辑错误
        const errorMessage = response.data?.error?.message || response.data?.message || '请求失败';
        if (onShowToast) {
          onShowToast(errorMessage);
        }
        return Promise.reject({
          ...response.data,
          originalResponse: response,
        });
      }
    },
    async (error: AxiosError<ZYError>) => {
      // 处理响应错误
      if (!error.config || !error.response) {
        if (onShowToast) {
          onShowToast('网络连接失败，请检查网络设置');
        }
        return Promise.reject(error);
      }

      const { status } = error.response;
      const axiosConfig = error.config as any;

      switch (status) {
        case 400: // 请求错误
          if (onShowToast && error.response.data?.error?.message) {
            onShowToast(error.response.data.error.message);
          }
          break;

        case 401: // 未授权或Token过期
          // 已经尝试过重试的请求不再处理
          if (axiosConfig._retry) {
            await handleLogout();
            break;
          }

          // 标记为已重试
          axiosConfig._retry = true;

          // 尝试刷新Token
          const refreshToken = await getRefreshToken();
          if (refreshToken) {
            try {
              // 使用刷新令牌获取新的访问令牌
              const response = await axios.post(`${config.baseURL}${refreshTokenPath}`, {
                refreshToken,
              });

              if (response.data?.success && response.data?.data) {
                const newToken = response.data.data;
                await setToken(newToken);

                // 更新当前请求并重试
                if (axiosConfig.headers) {
                  axiosConfig.headers.Authorization = `Bearer ${newToken}`;
                }
                return apiClient.request(axiosConfig);
              } else {
                await handleLogout();
              }
            } catch (refreshError) {
              console.error('刷新Token失败:', refreshError);
              await handleLogout();
            }
          } else {
            console.error('没有刷新Token，需要重新登录');
            await handleLogout();
          }
          break;

        case 403: // 禁止访问
          if (onShowToast) {
            onShowToast(error.response.data?.error?.message || '没有权限访问该资源');
          }
          break;

        case 404: // 资源不存在
          if (onShowToast) {
            onShowToast(error.response.data?.error?.message || '请求的资源不存在');
          }
          break;

        case 500: // 服务器错误
        default:
          if (onShowToast) {
            onShowToast(error.response.data?.error?.message || `服务器错误 (${status})`);
          }
          break;
      }

      // 根据平台处理错误
      return Promise.resolve({
        data: {
          success: false,
          message: error.response.data?.error?.message || '请求失败',
        },
      });
    },
  );

  /**
   * 通用请求方法
   */
  async function request<
    TResponse,
    TQuery = Record<string, any>,
    TData = Record<string, any>,
    THeader = any,
  >(props: RequestProps<TQuery, TData, THeader>): Promise<TResponse> {
    const { method, url, query, data, header, ignoreAuth = false, onError } = props;

    // 构建请求配置
    const axiosConfig: AxiosRequestConfig = {
      method,
      url,
      params: query,
      data,
      headers: {
        ...header,
        ignoreAuth,
      },
    };

    try {
      const response: AxiosResponse<TResponse> = await apiClient(axiosConfig);
      return response.data;
    } catch (error: any) {
      // 如果提供了错误处理函数并返回true，表示错误已处理
      if (onError && onError(error) === true) {
        return {
          success: false,
          error: {
            code: -1,
            message: '请求已被客户端处理',
            type: 'CLIENT_HANDLED',
          },
          data: null,
        } as unknown as TResponse;
      }

      return Promise.reject(error);
    }
  }

  // 更新配置函数
  function updateConfig(newConfig: Partial<ApiClientConfig>): void {
    if (newConfig.baseURL) {
      apiClient.defaults.baseURL = newConfig.baseURL;
    }

    if (newConfig.timeout) {
      apiClient.defaults.timeout = newConfig.timeout;
    }

    if (newConfig.appVersion) {
      apiClient.defaults.headers.common['X-App-Version'] = newConfig.appVersion;
    }

    if (newConfig.onLogout) {
      onLogout = newConfig.onLogout;
    }

    if (newConfig.onShowToast) {
      onShowToast = newConfig.onShowToast;
    }
  }

  return {
    request,
    updateConfig,
    client: apiClient,
  };
}
