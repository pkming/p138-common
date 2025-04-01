declare namespace P138Api {
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
  export interface CommonQueryParams
    extends QueryParams,
      SortParams,
      TimeRangeParams {}

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
}
