export const OrderStatuses: {
  label: string;
  key: CommonCommonEnum.OrderStatus;
  color?: string;
}[] = [
  { label: "待接单", key: 3 ,color: "#4caf50" },
  { label: "待出票", key: 4 ,color: "#FFA500" },
  { label: "合作出票", key: 12 ,color: "#FFA500" },
  { label: "派单未出", key: 13 ,color: "#FFA500" },
  { label: "保存方案", key: 1 ,color: "#FFA500" },
  { label: "已取消", key: 2 ,color: "#FFA500" },

  { label: "已出票", key: 5 },
  { label: "已开奖", key: 6 },
  { label: "已中奖", key: 7 },
  { label: "已支付", key: 9 },
  { label: "已结算", key: 10 },
  { label: "已取票", key: 11 },
  { label: "出票失败", key: 14,color: "#FF0000" },
];
export const orderStatusMap: Record<CommonCommonEnum.OrderStatus, string> = {
  1: "保存方案",
  2: "已取消",
  3: "待接单",
  4: "待出票",
  5: "已出票",
  6: "已开奖",
  7: "已中奖",
  8: "已取票",
  9: "已支付",
  10: "已结算",
  11: "已删除",
  12: "已取票",
  13: "出票失败",
  14: "已撤单",
};
export const OrderTypeMap: Record<CommonCommonEnum.OrderType, string> = {
  1: "自购",
  2: "合买",
  3: "代买",
  4: "追号",
};
export type OrderFilterStatus = CommonCommonEnum.OrderStatus | 15;
export type OrderFilterType = CommonCommonEnum.OrderType;
export type LotteryMapKey = CommonCommonEnum.LotteryName | "All";
export const lotteryMap: Record<LotteryMapKey, string> =
  {
    All: "全部",
    DoubleBall: "双色球",
    ArrangedFive: "排列五",
    ArrangedThree: "排列三",
    SuperLotto: "大乐透",
    ChooseNine: "任选九",
    WinLossLottery: "胜负彩",
    FootballLottery: "竞彩足球",
    BeijingSingleMatch: "北京单场",
    BasketballLottery: "竞彩篮球",
    SevenHappy: "七乐彩",
    Happy8: "快乐8",
    Fucai3D: "福彩3D",
    HalfTimeFullTimeBet6: "6场半全场",
    GameTotalGoalsBet4: "4场进球彩",
    SevenStar: "七星彩",
    Winner: "冠军",
    WinnerRunnerUp: "冠亚军",
  };
export const sortFilterMap: Record<PkgBusinessOrder.Sort, string> = {
  buyEndTime: "截止时间",
  createdAt: "下单时间",
  betAmount: "金额",
};
