import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Platform } from "react-native";
import { useAuthStore } from "src/store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Client_BASEURL } from "p138-common/config/dev";
// Token 管理工具
// export const TokenManager = {
//   async getToken(): Promise<string | null> {
//     try {
//       return AsyncStorage.getItem(TOKEN);
//     } catch (error) {
//       console.error('获取 Token 失败:', error);
//       return null;
//     }
//   },
//   async setToken(token: string): Promise<void> {
//     try {
//       AsyncStorage.setItem(TOKEN, token);
//       // console.error('设置 Token 成功:', token);
//     } catch (error) {
//       // console.error('设置 Token 失败:', error);
//     }
//   },
//   async removeToken(): Promise<void> {
//     try {
//       AsyncStorage.removeItem(TOKEN);
//     } catch (error) {
//       console.error('删除 Token 失败:', error);
//     }
//   },
//   async getRefreshToken(): Promise<string | null> {
//     try {
//       return AsyncStorage.getItem('refreshToken');
//     } catch (error) {
//       console.error('获取 Refresh Token 失败:', error);
//       return null;
//     }
//   },
//   async setRefreshToken(refreshToken: string): Promise<void> {
//     try {
//       AsyncStorage.setItem('refreshToken', refreshToken);
//     } catch (error) {
//       console.error('设置 Refresh Token 失败:', error);
//     }
//   },
//   async removeRefreshToken(): Promise<void> {
//     try {
//       AsyncStorage.removeItem('refreshToken');
//     } catch (error) {
//       console.error('删除 Refresh Token 失败:', error);
//     }
//   },
// };

// 配置 Axios 实例
const axiosInstance = axios.create({
  baseURL: Client_BASEURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
type ZYError = {
  error: {
    code: number; // Error code, such as 100000000
    message: string; // Error message, such as "data not found"
    type: string; // Error type, such as "not_found"
  };
  requestID: string; // Unique ID for the request
  success: boolean; // Indicates success or failure
};
export interface RequestProps<
  TQuery = Record<string, any>,
  TData = Record<string, any>,
  THeader = any
> {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string; // 请求路径
  query?: TQuery; // 查询参数
  data?: TData; // 请求体数据
  header?: THeader; // 自定义请求头
  ignoreAuth?: boolean; // 是否忽略鉴权
}

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data?.success) {
      return response;
    } else {
      return Toast.show(response.data.message);
    }
  },
  async (error: AxiosError<ZYError>) => {
    const config = error.config as AxiosRequestConfig | undefined;
    if (!config) {
      return Promise.reject(error); // 如果没有请求配置，直接返回错误
    }
    // const {setToken} = useAuthStore.getState();

    const { response } = error;
    console.log("error111", response);
    if (response) {
      const { status } = response;
      switch (status) {
        case 400: // 请求错误
          console.log(
            "response.data.error.message11",
            response.data.error.message
          );
          Toast.show(response.data.error.message);
          break;
        case 401: // 未授权或 Token 过期
          console.error("401 错误: 尝试刷新 Token...");
          await handleLogout();
          // const refreshToken = await TokenManager.getRefreshToken();
          // if (refreshToken) {
          //   try {
          //     const {data} = await axios.post(`${BASEURL}/auth/refresh`, {
          //       refreshToken,
          //     });
          //     // await setToken(data.token);

          //     // 更新请求头并重试原始请求
          //     if (config.headers) {
          //       config.headers.Authorization = `Bearer ${data.token}`;
          //     }
          //     return axiosInstance.request(config); // 重试请求
          //   } catch (refreshError) {
          //     console.error('刷新 Token 失败:', refreshError);
          //     await handleLogout();
          //   }
          // } else {
          //   console.error('没有 Refresh Token，请重新登录');
          //   await handleLogout();
          // }
          break;

        case 403: // 禁止访问
          console.error("403 错误: 没有权限访问该资源");
          break;

        case 404: // 资源未找到
          console.error("404 错误: 请求的资源不存在");
          break;

        case 500: // 服务器错误
          console.error(
            "500 错误: 服务器发生错误",
            response.data.error.message
          );
          // if (Platform.OS === 'web') {
          //   // message.error(response.data.error.message);
          //   Toast.show(response.data.error.message);

          // } else {
          //  Toast.show(response.data.error.message);
          // }
          Toast.show(response.data.error.message);
          break;

        default:
          console.error(`未知错误: ${status}`, response.data);
          break;
      }
    } else {
      console.error("网络错误或服务器未响应:", error.message);
    }

    if (Platform.OS === "web") {
      return Promise.resolve({ data: { success: false, message: "请求失败" } });
    } else {
      return Promise.reject(error); // 返回错误
    }
  }
);

// 处理登出逻辑
const handleLogout = async () => {
  // await TokenManager.removeToken();
  // await TokenManager.removeRefreshToken();
  console.log("用户已登出");
  // TODO: 在此处添加跳转到登录页面的逻辑，例如 React Navigation：
  // navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] });
};
type Headers = Record<string, any> & {
  Authorization?: string;
  "Content-Type"?: string;
  auth?: string;
  "User-Agent"?: string;
  "Accept-Language"?: string;
  "X-Locale"?: BasicTypes.Locale;
  "X-Timestamp"?: number;
  "X-Request-Id"?: string;
  "X-Device-Id"?: string;
  "X-Real-IP"?: string;
  "X-IP-Country"?: string;
  "X-IP-Region"?: string;
  "X-IP-City"?: string;
  "X-Sign"?: string;
  "X-Client-Type"?: string;
  "X-Platform"?: string;
  "X-Version"?: string;
  "X-Ca-Key"?: string;
  "X-Ca-timestamp"?: string;
  "X-Ca-nonce"?: string;
  "X-Shop-Code": number;
  "X-Is-Operator"?: string;
  "X-User-Type": ServerCommonUser.UserType;
  "X-Username": string;
  "X-Shop-Name"?: string;
};

// 通用请求方法
async function request<
  TResponse,
  TQuery = Record<string, any>,
  TData = Record<string, any>,
  THeader = Headers
>(props: RequestProps<TQuery, TData, THeader>): Promise<TResponse> {
  const { method, url, query, data, header, ignoreAuth = false } = props;

  const config: AxiosRequestConfig = {
    method,
    url,
    params: query,
    data,
    headers: header || {},
  };
  const { setLoggedIn } = useAuthStore.getState();
  // 如果需要鉴权
  // if (ignoreAuth) {
  //   const token = await TokenManager.getToken();
  //   if (token) {
  //     config.headers = {
  //       ...config.headers,
  //       Authorization: `Bearer ${token}`,
  //     };
  //     console.warn('用户登录1111', config.headers);
  //   } else {
  //     setLoggedIn(false);
  //     console.warn('用户未登录，请检查鉴权逻辑', 'LoggedIn');
  //   }
  //   console.warn('用户登录', token);
  // }
  try {
    const response: AxiosResponse<TResponse> = await axiosInstance(config);
    return response.data; // 返回响应数据
  } catch (error) {
    console.log("axiosError", error);
    const axiosError = error as AxiosError<ZYError>;

    if (axiosError.response?.data?.error) {
      console.error(
        `Error from API: ${axiosError.response.data.error.message}`
      );
      Toast.show(axiosError.response?.data?.error?.message || "请求失败");
    }
    return Promise.reject(axiosError);
  }
}

export default request;
