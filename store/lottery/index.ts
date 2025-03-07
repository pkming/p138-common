import {create} from 'zustand';

interface LotteryTypeInfo {
    lotteryTypeInfo?: ServerCommonLottery.Lottery;
    setLotteryTypeInfo: (appState: ServerCommonLottery.Lottery) => void;
  }
  
  export const useLotteryTypeInfo = create<LotteryTypeInfo>(set => ({
    lotteryTypeInfo: undefined,
    setLotteryTypeInfo: lotteryTypeInfo => set({lotteryTypeInfo}),
  }));


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
  