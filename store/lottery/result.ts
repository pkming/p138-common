import {create} from 'zustand';
export const LotteryResultTabs: {
  label: CommonCommonEnum.LotteryChineseName;
  key: CommonCommonEnum.LotteryName;
}[] = [
  {label: '竞彩足球', key: 'FootballLottery'},
  {label: '竞彩篮球', key: 'BasketballLottery'},
  // { label: '猜比分', key: '猜比分' },//暂时隐藏
  {label: '北京单场', key: 'BeijingSingleMatch'},
];

interface LotteryResult {
  activeTab: CommonCommonEnum.LotteryName;
  lotteryResult?: LotteryDrawAnnouncement.LotteryStatisticsVo[];
  setActiveTab: (activeTab: CommonCommonEnum.LotteryName) => void;
  setLotteryResult: (
    lotteryResult: LotteryDrawAnnouncement.LotteryStatisticsVo[],
  ) => void;
}

export const useLotteryResult = create<LotteryResult>(set => ({
  activeTab: 'FootballLottery',
  lotteryResult: undefined,
  setActiveTab: activeTab => set({activeTab}),
  setLotteryResult: lotteryResult => set({lotteryResult}),
}));
