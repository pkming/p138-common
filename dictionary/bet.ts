/**
 * 投注记录
 */
export const transactionTabs: {
    label: string;
    key:CommonCommonEnum.OrderStatus | 0;
  }[] = [
    {label: '全部', key: 0},
    {label: '待出票', key: 4},
    {label: '待开奖', key: 6},
    {label: '已开奖', key: 7},
    {label: '已中奖', key: 8},
  ];