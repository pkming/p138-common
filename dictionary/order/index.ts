export const OrderTypeMap: Record<CommonCommonEnum.OrderType, string> = {
  1: "自购",
  2: "合买",
  3: "代买",
  4: "追号",
};

export const OrderStatuses: string[] = [
    '', // 占位，枚举从1开始，数组的0索引留空
    '保存方案',
    '已取消', // 1: PendingOrderPlacement
    '待接单', // 2: Cancelled
    '待出票', // 4: PendingTicketIssuance
    '已出票', // 5: TicketIssued
    '待开奖', // 6: PendingDraw
    '已开奖', // 7: DrawCompleted
    '已中奖', // 8: WinnerAnnounced
    '已支付', // 9: Paid
    '已结算', // 10: Settled
    '已删除', // 10: Settled
    '已取票', // 10: Settled
    '出票失败', // 10: Settled
    '已撤单', // 10: Settled
  ];
  export const winStatusMap: Record<CommonCommonEnum.WinStatus, string> = {
    1: "未中奖",
    2: "已中奖",
    3: "未中奖",
    4: "未中奖",
    5: "未中奖",
  };
