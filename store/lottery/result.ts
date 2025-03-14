import {create} from 'zustand';

export const useLotteryResult = create<CommonLottery.LotteryResult>(set => ({
  activeTab: 'FootballLottery',
  lotteryResult: undefined,
  setActiveTab: activeTab => set({activeTab}),
  setLotteryResult: lotteryResult => set({lotteryResult}),
}));
