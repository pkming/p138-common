import dayjs from 'dayjs';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export const formattedWeek = (day: string) => {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  const formattedDate = dayjs(day);
  const weekDay = weekDays[formattedDate.day()]; // 获取星期几的数字，0-6
  return `星期${weekDay}`;
};

export const formattedDate = (day: string, format: string = 'YYYY-MM-DD') => {
  return dayjs(day).format(format);
};

export const showToast = (message: string) => {
  globalThis.Toast.show(message);
};
export const getImageUrl = (url: string) => {
  return url.replace('http://', 'https://');
};

export const kScreenWidth = width;
export const kScreenHeight = height;
