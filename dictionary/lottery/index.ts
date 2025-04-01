import { PresetColorType, PresetStatusColorType } from "antd/lib/_util/colors";
import { LiteralUnion } from "antd/lib/_util/type";



export const lotteryNameMap: Record<CommonCommonEnum.LotteryName, CommonCommonEnum.LotteryChineseName> = {
    FootballLottery: '竞彩足球',
    BasketballLottery: '竞彩篮球',
    DoubleBall: '双色球',
    ArrangedFive: '排列五',
    ArrangedThree: '排列三',
    SuperLotto: '大乐透',
    ChooseNine: '任选九',
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
  
export const TagColorMap:LiteralUnion<PresetColorType|PresetStatusColorType>[]=[
    'green',
    'success',
    'warning',
    'error',
    'default',
    'processing',
    'blue',
    'purple',
    'orange',
    'lime',
    'gold',
    'cyan',
    'magenta',
    'red',
    'green',
    'blue',
    'purple',
    'orange',
    'lime',
    'gold',
    'cyan',
    'magenta',
    'red',
    'green',
    'blue',
    'purple',
]
  export const OrderStatusMap: Record<CommonCommonEnum.OrderStatus | 0, string> = {
    0:'全部',
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
  
  