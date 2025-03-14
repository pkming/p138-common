import {create} from 'zustand';


  
  export const useLotteryTypeInfo = create<CommonLottery.LotteryTypeInfo>(set => ({
    lotteryTypeInfo: undefined,
    setLotteryTypeInfo: lotteryTypeInfo => set({lotteryTypeInfo}),
  }));


  
  export const useLotteryResult = create<CommonLottery.LotteryResult>(set => ({
    activeTab: 'FootballLottery',
    lotteryResult: undefined,
    setActiveTab: activeTab => set({activeTab}),
    setLotteryResult: lotteryResult => set({lotteryResult}),
  }));
  