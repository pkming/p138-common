
declare namespace ServerCommonLottery {

    interface CreateLotteryCommand {
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        lotteryType: CommonCommonEnum.LotteryType;
        lotterySort?: number;
        lotteryIcon: string;
        lotteryDesc?: string;
    }

    interface CreatedLotteryResult {
        lotteryTypeID: string;
    }

    interface ListCustomLotteryCommandQuery {
        shopCode: number;
    }

    interface ListCustomLotteryResult {
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        lotteryType: CommonCommonEnum.LotteryType;
        showType?: CommonCommonEnum.LotteryType;
        lotterySort?: number;
        lotteryIcon: string;
        lotteryDesc: string;
        lotteryStatus: CommonCommonEnum.LotteryStatus | null;
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
        shopLotteryId: string;
    }

    interface Lottery {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
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

    interface PathIDPathParams {
        lotteryTypeID: string;
    }

    interface ShopLottery {
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
    }

    interface UpdateLotteryCommandPathParams {
        lotteryTypeID: string;
    }

    interface UpdateLotteryCommandWithoutPath {
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

}
