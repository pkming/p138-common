
declare namespace CommonCommonEnum {

    // 1: 直选定位复式, 2: 直选组合复式
    type ArrangedFivePlay = 1 | 2;

    // 1: 直选, 2: 组三, 3: 组六, 4: 组选
    type ArrangedThreePlay = 1 | 2 | 3 | 4;

    // 1: 五不同, 2: 二同, 3: 三同, 4: 两组不同, 5: 四同, 6: 三同二同
    type CombinationArrangedFivePlayParamType = '1' | '2' | '3' | '4' | '5' | '6';

    // 1: 前区胆码, 2: 后区胆码, 3: 后区胆码, 4: 后区拖码
    type DanTuoSelectionSuperLottoPlayParamType = '1' | '2' | '3' | '4';

    // 1: 个位, 2: 十位, 3: 百位, 4: 千位, 5: 万位
    type FixedPositionArrangedFivePlayParamType = '1' | '2' | '3' | '4' | '5';

    // 2: 2串1, 3: 3串1, 4: 4串1, 5: 5串1, 6: 6串1, 7: 7串1, 8: 8串1
    type FreeParlayPassType = 2 | 3 | 4 | 5 | 6 | 7 | 8;

    // 1: 组选和值: 例子 1,2,3, 2: 组选2码全包:例子 0,1,2,3
    type GroupSelectionArrangedThreePlayParamType = '1' | '2';

    // 1: 福利彩票(数字彩), 2: 体育彩票(竞技彩)
    type LotteryCategory = 1 | 2;

    // 双色球: 双色球, 排列五: 排列五, 排列三: 排列三, 大乐透: 大乐透, 任选九: 任选九, 胜负彩: 胜负彩, 竞彩足球: 竞彩足球, 北京单场: 北京单场, 竞彩篮球: 竞彩篮球, 七乐彩: 七乐彩, 快乐8: 快乐8, 福彩3D: 福彩3D, 6场半全场: 6场半全场, 4场进球彩: 4场进球彩, 七星彩: 七星彩, 冠军: 冠军, 冠亚军: 冠亚军
    type LotteryChineseName = '双色球' | '排列五' | '排列三' | '大乐透' | '任选九' | '胜负彩' | '竞彩足球' | '北京单场' | '竞彩篮球' | '七乐彩' | '快乐8' | '福彩3D' | '6场半全场' | '4场进球彩' | '七星彩' | '冠军' | '冠亚军';

    // DoubleBall: 双色球, ArrangedFive: 排列五, ArrangedThree: 排列三, SuperLotto: 大乐透, ChooseNine: 任选九, WinLossLottery: 胜负彩, FootballLottery: 竞彩足球, BeijingSingleMatch: 北京单场, BasketballLottery: 竞彩篮球, SevenHappy: 七乐彩, Happy8: 快乐8, Fucai3D: 福彩3D, HalfTimeFullTimeBet6: 6场半全场, GameTotalGoalsBet4: 4场进球彩, SevenStar: 七星彩, Winner: 冠军, WinnerRunnerUp: 冠亚军
    type LotteryName = 'DoubleBall' | 'ArrangedFive' | 'ArrangedThree' | 'SuperLotto' | 'ChooseNine' | 'WinLossLottery' | 'FootballLottery' | 'BeijingSingleMatch' | 'BasketballLottery' | 'SevenHappy' | 'Happy8' | 'Fucai3D' | 'HalfTimeFullTimeBet6' | 'GameTotalGoalsBet4' | 'SevenStar' | 'Winner' | 'WinnerRunnerUp';

    // 1: 上架, 2: 下架
    type LotteryStatus = 1 | 2;

    // 1: 数字彩(体彩(大乐透,排列三,排列五,七星彩),福彩(双色球，福彩3D，快乐8，七乐彩)), 2: 竞技彩(竞彩足球，竞彩篮球，北京单场), 3: 传统足彩(胜负彩，4场进球彩，6场半全场)
    type LotteryType = 1 | 2 | 3;

    // 1: 3串3, 2: 3串4, 3: 4串4, 4: 4串5, 5: 4串6, 6: 4串11, 7: 5串5, 8: 5串6, 9: 5串10, 10: 5串16, 11: 5串20, 12: 5串26, 13: 6串6, 14: 6串7, 15: 6串15, 16: 6串20, 17: 6串22, 18: 6串35, 19: 6串42, 20: 6串50, 21: 6串57, 22: 7串7, 23: 7串8, 24: 7串21, 25: 7串35, 26: 7串120, 27: 8串8, 28: 8串9, 29: 8串28, 30: 8串56, 31: 8串70, 32: 8串247, 33: 单关, 34: 2串1, 35: 3串1, 36: 4串1, 37: 5串1, 38: 6串1, 39: 7串1, 40: 8串1
    type MXNParlayType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;

    // 保存方案: 保存方案, 已取消: 已取消, 已撤单: 已撤单, 待接单: 待接单, 待出票: 待出票, 已出票: 已出票, 待开奖: 待开奖, 已开奖: 已开奖, 已中奖: 已中奖, 已支付: 已支付, 已结算: 已结算, 已删除: 已删除, 已取票: 已取票, 出票失败: 出票失败
    type OrderStatus = 1 | 2 | 14 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

    // 1: 自购, 2: 合买, 3: 代买, 4: 追号
    type OrderType = 1 | 2 | 3 | 4;

    // 1: 自由过关(多选), 2: M串N(单选), 3: 单关
    type PassCategory = 1 | 2 | 3;

    // 1: 第一位数, 2: 第二位数, 3: 第三位数, 4: 第四位数, 5: 第五位数, 6: 第六位数, 7: 第七位数
    type SevenStarPlayParamType = '1' | '2' | '3' | '4' | '5' | '6' | '7';

    // 1: 复式: 例子 0,1,2,3, 2: 胆拖: 胆码|拖码 例子 0|1,2,3, 3: 跨度复式: 例子 2,3,4
    type SixCombinedArrangedThreePlayParamType = '1' | '2' | '3';


    type Sort = 'createdAt';

    // 1: 前区, 2: 前区
    type StandardSelectionSuperLottoPlayParamType = '1' | '2';

    // 1: 定位复式: 传值方式: 百位|十位|个位 例如: 0,1|0,1|0,1, 2: 组合三不同:例子 0,1,2,3 必须大于等于3, 3: 和值:例子 00,01,02, 4: 组合胆拖: 例子 胆码|拖码 0,1|0,1, 5: 跨度复式:例子 0,1,2
    type StraightSelectionArrangedThreePlayParamType = '1' | '2' | '3' | '4' | '5';

    // 1: 普通选号, 2: 胆拖选号
    type SuperLottoPlay = 1 | 2;

    // 1: 单式:例子: 00,1, 2: 复式:例子 必须大于等于2个数字 0,1,2,3, 3: 胆拖:  胆码|拖码 例子 0|1,2,3, 4: 跨度复式: 例子: 1,2,3
    type ThreeCombinedArrangedThreePlayParamType = '1' | '2' | '3' | '4';

    // 1: 店内票据, 2: 合作出票, 3: 合作派单, 4: 店内订单
    type TicketType = 1 | 2 | 3 | 4;

    // 1: 待开奖, 2: 已中奖, 3: 未中奖, 4: 待派奖, 5: 已派奖
    type WinStatus = 1 | 2 | 3 | 4 | 5;

}
