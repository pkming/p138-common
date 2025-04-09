/**
 * P138通用API框架 - 核心客户端实现
 */

import axios from 'axios';
import { errorMiddleware } from './middleware/error';
import { tokenMiddleware } from './middleware/token';
import { requestIdMiddleware } from './middleware/requestId';

export function createApiClient(config: P138Api.IBaseConfig): P138Api.IApiClient {
  const client = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout || 10000,
    headers: {
      'X-App-Version': '1.0.0',
      ...config.header
    }
  });

  const middlewares: P138Api.IMiddleware[] = [errorMiddleware, requestIdMiddleware,tokenMiddleware];

  // 执行中间件
  async function executeMiddlewares(
    type: 'onRequest' | 'onResponse' | 'onError',
    context: P138Api.IMiddlewareContext
  ) {
    for (const middleware of middlewares) {
      if (middleware[type]) {
        const result = await middleware[type](context);
        // 如果是错误中间件并且返回了结果，则使用该结果作为响应
        if (type === 'onError' && result) {
          context.response = { data: result } as any;
          return result;
        }
      }
    }
  }

  return {
    client,
    use(middleware: P138Api.IMiddleware) {
      middlewares.push(middleware);
    },
    async request<TResponse = any, TQuery = Record<string, any>, TData = Record<string, any>, THeader = Record<string, string>>(
      props: P138Api.IRequestProps<TQuery, TData, THeader>
    ): Promise<TResponse> {
      const { method, url, query, data, skipErrorHandler, skipTokenHandler } = props;
      
      // 创建请求上下文
      const context: P138Api.IMiddlewareContext = {
        request: {
          method,
          url,
          params: query as Record<string, any>,
          data,
          header: {
            ...props.header
          }
        },
        config: {
          ...config,
          storage: {
            getItem: async (key: string) => config.storage.getItem(key),
            setItem: async (key: string, value: string) => config.storage.setItem(key, value),
            removeItem: async (key: string) => config.storage.removeItem(key)
          },
          toast: {
            show: (message: string) => config.onShowToast?.(message) ,
            error: (message: string) => config.onShowToast?.(message) ,
            success: (message: string) => config.onShowToast?.(message)
          },
          logout: config.onLogout || (() => {})
        }
      };

      try {
        // 执行请求前中间件
        if (!skipTokenHandler) {
          await executeMiddlewares('onRequest', context);
        }

        // 发送请求
        const response = await client.request<TResponse>({
          ...context.request,
          headers: context.request?.header
        });
        context.response = response;

        // 执行响应中间件
        if (!skipTokenHandler) {
          await executeMiddlewares('onResponse', context);
        }
        console.log(context.request,config.baseURL, '==client.request==');
        return response.data;
      } catch (error) {
        context.error = error as any;
        // 执行错误中间件
        if (!skipErrorHandler) {
          await executeMiddlewares('onError', context);
          
          if(context.isRetry){
            context.isRetry = false;
            return this.request(props)
          }
          // 如果错误中间件设置了响应，则返回该响应
          if (context.response) {
            return context.response.data as TResponse;
          }
        }
        
        throw error;
      }
    }
  };
} 