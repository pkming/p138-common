export const errorMiddleware: P138Api.IMiddleware = {
  name: 'error',
  async onError(context) {
    const { error, config } = context;
    if (!error) return;

    // 处理网络错误
    if (!error.response) {
      config.toast.error('网络连接失败，请检查网络设置');
      // 设置一个默认响应，防止错误继续传播
      context.response = { data: { success: false, message: '网络连接失败，请检查网络设置' } } as any;
      return;
    }

    const { status, data } = error.response;

    // 处理HTTP错误
    switch (status) {
      case 400:
        config.toast.error(data.message || '请求参数错误');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.message || '请求参数错误' } } as any;
        break;
      case 401:
        config.toast.error(data.message);
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.message } } as any;
        break;
      case 403:
        config.toast.error('没有权限访问');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: '没有权限访问' } } as any;
        break;
      case 404:
        config.toast.error('请求的资源不存在');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: '请求的资源不存在' } } as any;
        break;
      case 500:
        config.toast.error('服务器错误，请稍后重试');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: '服务器错误，请稍后重试' } } as any;
        break;
      default:
        config.toast.error(data.message || '请求失败，请稍后重试');
        // 设置一个默认响应，防止错误继续传播
        context.response = { data: { success: false, message: data.message || '请求失败，请稍后重试' } } as any;
    }
  }
}; 