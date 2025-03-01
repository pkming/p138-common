
import {create} from 'zustand';
export type BallType =
  | 'red'
  | 'blue'
  | 'redDan'
  | 'blueDan'
  | 'redTuo'
  | 'blueTuo';
// 投注类型
export type BetType = 'single' | 'multiple' | 'danTuo';
// 定义投注结构
export interface Bet {
  /** 投注类型：单式、复式、胆拖*/
  type: BetType; //
  /**保存球的选择*/
  balls: Record<BallType, number[]>;
  /**倍数*/
  multiplier: number;
  /**所有注数*/
  betCount: number;
}

export const BetDict = {
  single: '单式',
  multiple: '复式',
  danTuo: '胆拖',
};
interface BetSlipListStore {
    /**保存所有投注*/
    bets: Bet[];
    passTypesArray: string[];
    selectedPassTypes: string[];
    /**支持批量添加投注*/
    addBets: (newBets: Bet[]) => void;
    /**删除指定注*/
    removeBet: (index: number) => void;
    /**更新倍数*/
    updateMultiplier: (index: number, multiplier: number) => void;
    /**清空所有投注*/
    clearBets: () => void;
    setSelectedPassTypes: (selectedPassTypes: string[]) => void;
    setPassTypesArray: (passTypesArray: string[]) => void;
  }
  
  export const useBetSlipListStore = create<BetSlipListStore>(set => ({
    bets: [],
    selectedPassTypes: [],
    passTypesArray: [],
    // 支持批量添加投注
    addBets: newBets =>
      set(state => ({
        bets: [...state.bets, ...newBets], // 合并新投注到现有状态
      })),
  
    // 删除一注号码
    removeBet: index =>
      set(state => ({
        bets: state.bets.filter((_, i) => i !== index),
      })),
  
    // 更新倍数
    updateMultiplier: (index, multiplier) =>
      set(state => ({
        bets: state.bets.map((bet, i) =>
          i === index ? {...bet, multiplier} : bet,
        ),
      })),
    setSelectedPassTypes: selectedPassTypes =>  set({selectedPassTypes}),
    setPassTypesArray: passTypesArray => set({passTypesArray}),
    // 清空所有投注
    clearBets: () =>
      set({
        bets: [],
      }),
  }));
  