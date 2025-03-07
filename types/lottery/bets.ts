export type NewSportBallPlay =
| '混合'
| '混合投注'
| '猜一场'
| '胜平负'
| '让球胜平负'
| '猜比分'
| '总进球'
| '半全场'
| '胜负'
| '让分'
| '大小分'
| '胜负差'
| '上下单双'
| '胜负/让分'
| '胜负过关';

export type MatchInfo = LotteryDataSource.MatchInfo & {
  selectedHandicapDtos: {
    [playEnglishName: string]: LotteryDataSource.CompetitionOddsDto[];
  }; // 玩法和投注项
  isConfirmed: boolean;
};
export type CacheKey = string; // 缓存的键（可以是 JSON 序列化的字符串）
export type CacheValue = {
  betsCount: number;
  maxPayout: number;
  minPayout: number;
};

export type BetResultCache = Record<CacheKey, CacheValue>;
export type BetStore = {
  cache: BetResultCache;
  /**记录选中的比赛*/
  selectedMatches : Record<
    string, // competitionId
    string[]
  >;
  /**玩法选项卡  
   * 足球 0混合 1胜平负 2猜比分 3总进球 4半全场 5猜一场   
   * 篮球 0混合 ，1胜负，2大小分，3胜负差
   * 北京单场 0胜平负 1猜比分 2总进球 3半全场 4上下单双 5胜负过关*/
  activeBallPay: number; //玩法选项卡
  /** 倍数*/
  multiplier: number;
  /**选择投注*/
  toggleSelection: (
    matchId: string,
    oddsCellKey: string,
    /**最大限制*/
    maxCount?: number,
  ) => // /**比赛*/
  void; // 切换选中状态
  /**设置倍数*/
  setMultiplier: (multiplier: number) => void; // 更新倍数

  matchData: Record<string, LotteryDataSource.MatchInfo>; // 存储比赛数据
  groupedMatches: Record<string, Record<string, string[]>>; // 按日期和赛事分组存储比赛ID
  templateMatch: string[];
  setTemplateMatch: (templateMatch: string[]) => void;
  setMatchData: (matchId: string, matchInfo: LotteryDataSource.MatchInfo) => void;
  setGroupedMatches: (
    date: string,
    leagueName: string,
    matchIds: string[],
  ) => void;
  /**更新玩法tab选择*/
  setActiveBallPay: (activeBallPay: number) => void;
  resetStore: () => void;
  setSelectedMatches: (
    selectedMatches : Record<
      string, // competitionId
      string[]
    >,
  ) => void;
};


export type BetOption = {
  mode: '自由过关' | 'M串N'; // 投注模式
  passTypes: string[]; // 串关方式，如 ['2串1', '3串1'] 或 ['4串5']
};
export type EveryBetType = {
  matchId: string;
  playType: string;
  bet: LotteryDataSource.CompetitionOddsDto;
};

export type MatchData = {
  [matchId: string]: {
    selectedHandicapDtos: {
      [playEnglishName: string]: LotteryDataSource.CompetitionOddsDto[];
    }; // 玩法和投注项
  };
};

export type LotteryMatchListProps = {
  lotteryName: Extract<
    CommonCommonEnum.LotteryName,
    | 'FootballLottery'
    | 'BasketballLottery'
    | 'BeijingSingleMatch'
    | 'WinLossLottery'
    | 'ChooseNine'
  >;
};