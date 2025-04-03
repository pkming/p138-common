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

  const middlewares: P138Api.IMiddleware[] = [errorMiddleware, tokenMiddleware, requestIdMiddleware];

  // 执行中间件
  async function executeMiddlewares(
    type: 'onRequest' | 'onResponse' | 'onError',
    context: P138Api.IMiddlewareContext
  ) {
    for (const middleware of middlewares) {
      if (middleware[type]) {
        await middleware[type](context);
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
            getItem: (key: string) => localStorage.getItem(key),
            setItem: (key: string, value: string) => localStorage.setItem(key, value),
            removeItem: (key: string) => localStorage.removeItem(key)
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

        return response.data;
      } catch (error) {
        context.error = error as any;
        
        // 执行错误中间件
        if (!skipErrorHandler) {
          await executeMiddlewares('onError', context);
        }
        
        throw error;
      }
    }
  };
} 