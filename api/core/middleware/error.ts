export const errorMiddleware: P138Api.IMiddleware = {
  name: 'error',
  async onError(context) {
    const { error, config } = context;
    if (!error) return;

    // 处理网络错误
    if (!error.response) {
      config.toast.error(`处理网络错误:${error.message} ${error.response} ${error} `);
      // 设置一个默认响应，防止错误继续传播
      context.response = { data: { success: false, message: error.message } } as any;
      return;
    }

    const { status, data } = error.response;
    console.log('error', data);
    // 处理HTTP错误
    switch (status) {
      case 400:
        config.toast.error(data.error.message || '请求参数错误');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.error.message || '请求参数错误' } } as any;
        break;
      // 401 未授权 - 不在这里处理，让业务层处理token刷新逻辑
      case 401:
        // 不显示错误提示，也不设置默认响应，让错误继续传播到业务层
        break;
      case 403:
        config.toast.error(data.error.message || '没有权限访问');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.error.message || '没有权限访问' } } as any;
        break;
      case 404:
        config.toast.error(data.error.message || '请求的资源不存在');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.error.message || '请求的资源不存在' } } as any;
        break;
      case 500:
        config.toast.error(data.error.message || '服务器错误，请稍后重试');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.error.message || '服务器错误，请稍后重试' } } as any;
        break;
      default:
        config.toast.error(data.error.message || '请求失败，请稍后重试');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.error.message || '请求失败，请稍后重试' } } as any;
    }
  }
}; 