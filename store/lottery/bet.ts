import { BetStore } from 'p138-common/types/lottery/bets';
import {create} from 'zustand';


export const useBetStore = create<BetStore>((set, get) => ({
  selectedMatches : {}, // 存储选中的比赛和对应的玩法
  multiplier: 1, // 倍数
  activeBallPay: 0,
  matchData: {},
  groupedMatches: {},
  templateMatch: [],
  cache:{},
  setMatchData: (matchId, matchInfo) =>
    set(state => ({
      matchData: {
        ...state.matchData,
        [matchId]: matchInfo, // 存储比赛信息
      },
    })),
  setGroupedMatches: (date, leagueName, matchIds) =>
    set(state => ({
      groupedMatches: {
        ...state.groupedMatches,
        [leagueName]: {
          ...state.groupedMatches[leagueName],
          [date]: matchIds, // 按联赛名和日期分组存储比赛ID
        },
      },
    })),

  setActiveBallPay: activeBallPay => {
    get().resetStore();
    set({activeBallPay});
  },

  toggleSelection: (
    matchId: string,
    oddsCellKey: string,
    maxCount?: number,
  ) => {
    const selectedMatches  = get().selectedMatches ; // 获取当前选中的比赛

    if (selectedMatches [matchId]?.includes(oddsCellKey)) {
      // 如果该 oddsCellKey 已经存在于 selectedMatches  中，移除它
      const updatedSelectedMatch = {...selectedMatches };
      updatedSelectedMatch[matchId] = updatedSelectedMatch[matchId].filter(
        key => key !== oddsCellKey,
      );

      // 如果该比赛没有任何选中的 oddsCellKey，则删除该比赛
      if (updatedSelectedMatch[matchId].length === 0) {
        delete updatedSelectedMatch[matchId];
      }

      set({selectedMatches : updatedSelectedMatch});
    } else {
      // 限制最大选择个数，允许同场比赛添加
      if (
        maxCount &&
        Object.keys(selectedMatches ).length >= maxCount &&
        !selectedMatches [matchId]
      ) {
        globalThis.Toast.show(`只能选择${maxCount}场比赛`);
        return;
      }
      set({
        selectedMatches : {
          ...selectedMatches ,
          [matchId]: [...(selectedMatches [matchId] || []), oddsCellKey], // 添加新的 oddsCellKey
        },
      });
    }
  },
  setTemplateMatch: templateMatch => set(() => ({templateMatch})),
  setSelectedMatches: selectedMatches  => set(() => ({selectedMatches })),
  setMultiplier: multiplier => set(() => ({multiplier})),
  resetStore: () => set({selectedMatches : {}, multiplier: 1, activeBallPay: 0}),
}));
