
declare namespace LotteryShopLottery {

    interface CreateShopLotteryCommand {
        username: string;
        lotteryTypeID: string;
        shopCode: number;
        limitSaleTime?: number | null;
        updateBy?: string;
        gameUrl?: string;
        recordUrl?: string;
        togetherSwitch: number;
        ticketSwitch?: number;
        searchValue?: string;
        saleSwitch: number;
        remark?: string;
        params?: any;
        multipartCompetitionSwitch?: number;
        mnSwitch?: number;
        minBetAmount: string;
        minAppendAmount?: string;
        limitBetTime: number;
        createBy?: string | null;
        cooperationShopCode?: number | null;
        bonusOptimizationSwitch?: number;
        billingSwitch?: number;
        betProportionSwitch?: number;
        banComplexSwitch?: number;
    }

    interface CreateShopLotteryResult {
        shopLotteryID: string;
    }

    interface GetShopLotteryCommandPathParams {
        shopLotteryID: string;
    }

    interface ListShopLotteryCommandQuery {
        shopCode: number;
    }

    interface ListShopLotteryResult {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        lotteryTypeID: string;
        shopCode: number;
        limitSaleTime?: number | null;
        updateBy?: string;
        gameUrl?: string;
        recordUrl?: string;
        togetherSwitch: number;
        ticketSwitch?: number;
        searchValue?: string;
        saleSwitch: number;
        remark?: string;
        params?: any;
        multipartCompetitionSwitch?: number;
        mnSwitch?: number;
        minBetAmount: string;
        minAppendAmount?: string;
        limitBetTime: number;
        createBy?: string | null;
        cooperationShopCode?: number | null;
        bonusOptimizationSwitch?: number;
        billingSwitch?: number;
        betProportionSwitch?: number;
        banComplexSwitch?: number;
        shopLotteryID: string;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        lotteryType: CommonCommonEnum.LotteryType;
        showType?: CommonCommonEnum.LotteryType;
        lotterySort?: number;
        lotteryIcon: string;
        lotteryDesc: string;
        lotteryStatus: CommonCommonEnum.LotteryStatus | null;
    }

    interface SetShopLotteryCommandPathParams {
        shopLotteryID: string;
    }

    interface SetShopLotteryCommandQueryWithoutPath {
        username: string;
    }

    interface SetShopLotteryCommandWithoutPath {
        lotteryTypeID: string;
        shopCode: number;//店铺ID               
        limitSaleTime?: number | null;//官方截止时间
        updateBy?: string;//更新者
        gameUrl?: string;//游戏URL
        recordUrl?: string;//记录URL
        togetherSwitch: number;//是否允许合买
        ticketSwitch?: number;//是否允许追号
        searchValue?: string;//搜索值
        saleSwitch: number;//是否允许销售
        remark?: string;//备注
        params?: any;//参数
        multipartCompetitionSwitch?: number;//是否允许多串过关
        mnSwitch?: number;//是否允许M串N
        minBetAmount: string;//最低投注金额
        minAppendAmount?: string;//最低追号金额
        limitBetTime: number;//投注截止时间
        createBy?: string | null;//创建者
        cooperationShopCode?: number | null;//合作店铺ID
        bonusOptimizationSwitch?: number;//是否允许奖金优化
        billingSwitch?: number;//是否允许出票
        betProportionSwitch?: number;//是否允许比例投注
        banComplexSwitch?: number;//是否禁止复杂方案
    }

    interface SetShopLotteryResult {
        shopLotteryID: string;
    }

}
