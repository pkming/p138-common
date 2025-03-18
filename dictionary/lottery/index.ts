

export const lotteryNameMap: Record<CommonCommonEnum.LotteryName, string> = {
    FootballLottery: '竞彩足球',
    BasketballLottery: '竞彩篮球',
    DoubleBall: '双色球',
    ArrangedFive: '排列5',
    ArrangedThree: '排列三',
    SuperLotto: '大乐透',
    ChooseNine: '任选9',
    WinLossLottery: '胜负彩',
    BeijingSingleMatch: '北京单场',
    SevenHappy: '七星彩',
    Happy8: '快乐8',
    Fucai3D: '福彩3D',
    HalfTimeFullTimeBet6: '6场半全场',
    GameTotalGoalsBet4: '4场进球彩',
    SevenStar: '七星彩',
    Winner: '冠军',
    WinnerRunnerUp: '冠亚军',
  };
  // export const LotteryIconMap: Record<CommonCommonEnum.LotteryName, number> = {
  //   BasketballLottery: require('src/asset/jpimgs/home/icon_game_basletball.png'),
  //   FootballLottery: require('src/asset/jpimgs/home/icon_game_foot_ball.png'),
  //   BeijingSingleMatch: require('src/asset/jpimgs/home/icon_game_bj_single.png'),
  //   WinLossLottery: require('src/asset/jpimgs/home/icon_game_win_lose.png'),
  //   ChooseNine: require('src/asset/jpimgs/home/icon_game_choose9.png'),
  //   Happy8: require('src/asset/jpimgs/home/icon_game_happy8.png'),
  //   DoubleBall: require('src/asset/jpimgs/home/icon_game_double_colors.png'),
  //   SevenStar: require('src/asset/jpimgs/home/icon_game_7star.png'),
  //   SuperLotto: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   ArrangedFive: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   ArrangedThree: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   SevenHappy: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   Fucai3D: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   HalfTimeFullTimeBet6: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   GameTotalGoalsBet4: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   Winner: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  //   WinnerRunnerUp: require('src/asset/jpimgs/home/icon_game_big_leto.png'),
  // };

  export const OrderStatusMap: Record<CommonCommonEnum.OrderStatus, string> = {
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

  export const LotteryResultTabs: {
    label: CommonCommonEnum.LotteryChineseName;
    key: CommonCommonEnum.LotteryName;
  }[] = [
    {label: '竞彩足球', key: 'FootballLottery'},
    {label: '竞彩篮球', key: 'BasketballLottery'},
    // { label: '猜比分', key: '猜比分' },//暂时隐藏
    {label: '北京单场', key: 'BeijingSingleMatch'},
  ];
  
  