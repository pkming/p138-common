// src/components/toast/ToastService.ts
type ToastListener = (message: string, duration: number, position: "top" | "bottom" | "center") => void;

let toastListener: ToastListener | null = null;

export const ToastService = {
  registerToastListener(listener: ToastListener) {
    if (!toastListener) {
      toastListener = listener; // 确保只注册一次
    }
  },
  removeToastListener() {
    toastListener = null; // 清除监听器
  },
  show(message: string, duration: number = 3000, position: "top" | "bottom" | "center" = "center") {
    if (toastListener) {
      toastListener(message, duration, position); // 调用注册的 listener
    }
  },
};

// **暴露为全局变量**
if (typeof global !== "undefined") {
  global.Toast = ToastService; // 将 ToastService 暴露为 `global.toast`
}
