import {create} from 'zustand';

interface LotteryTypeInfo {
    lotteryTypeInfo?: ServerCommonLottery.Lottery;
    setLotteryTypeInfo: (appState: ServerCommonLottery.Lottery) => void;
  }
  
  export const useLotteryTypeInfoStore = create<LotteryTypeInfo>(set => ({
    lotteryTypeInfo: undefined,
    setLotteryTypeInfo: lotteryTypeInfo => set({lotteryTypeInfo}),
  }));