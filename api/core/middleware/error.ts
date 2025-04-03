
export const errorMiddleware: P138Api.IMiddleware = {
  name: 'error',
  async onError(context) {
    const { error, config } = context;
    if (!error) return;

    // 处理网络错误
    if (!error.response) {
      config.toast.error('网络连接失败，请检查网络设置');
      return;
    }

    const { status, data } = error.response;

    // 处理HTTP错误
    switch (status) {
      case 400:
        config.toast.error(data.message || '请求参数错误');
        break;
      case 401:
        config.toast.error(data.message);
        break;
      case 403:
        config.toast.error('没有权限访问');
        break;
      case 404:
        config.toast.error('请求的资源不存在');
        break;
      case 500:
        config.toast.error('服务器错误，请稍后重试');
        break;
      default:
        config.toast.error(data.message || '请求失败，请稍后重试');
    }
  }
}; 