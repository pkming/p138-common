
declare namespace BusinessShopCooperation {

    interface Class1 {
        id: number;
        shopId: number;
        toShopId: number;
        platformStatus: number;
        status: number;
        cooperateUrl: any;
        commissionRate: string;
        balance: number;
        creditLimit: number;
        lotteryNames: string[] | null;
        shopName: string;
        imgUrl: string;
        createTime: string;
        remark: any;
        cooperationStatus: number;
        cooperationBalance: number;
        withdrawCooperationBalance: any;
        shopType: number;
        reviewShopId: any;
        ticketRate: number;
        shopTelephone: string;
        lotteryIds: string;
        noTicketLotteryNames: any;
        ticketLotteryIds: any;
        bdTopic: number | null;
        bdUnread: string | null;
        lotteryDtos: Class2[] | null;
        remindLimit: any;
        withdrawalType: number;
    }

    interface Class2 {
        id: number;
        shopId: number;
        cooperationShopId: any;
        lotteryName: string;
        lotteryIcon: string;
        lotteryDesc: string;
        lotteryType: number;
        lotterySort: number;
        saleSwitch: number;
        togetherSwitch: number;
        minBetAmount: number;
        limitBetTime: number;
        limitSaleTime: any;
        billingSwitch: number;
        ticketSwitch: number;
        banComplexSwitch: number;
        multipartCompetitionSwitch: number;
        mnSwitch: number;
        bonusOptimizationSwitch: number;
        betProportionSwitch: number;
        minAppendAmount: number;
        commissionRate: number;
        gameUrl: string;
        recordUrl: string;
    }

    interface Class6 {
        id: number;
        shopId: number;
        cooperationShopId: any;
        lotteryName: string;
        lotteryIcon: string;
        lotteryDesc: string;
        lotteryType: number;
        lotterySort: number;
        saleSwitch: number;
        togetherSwitch: number;
        minBetAmount: number;
        limitBetTime: number;
        limitSaleTime: any;
        billingSwitch: number;
        ticketSwitch: number;
        banComplexSwitch: number;
        multipartCompetitionSwitch: number;
        mnSwitch: number;
        bonusOptimizationSwitch: number;
        betProportionSwitch: number;
        minAppendAmount: number;
        commissionRate: any;
        gameUrl: string;
        recordUrl: string;
    }

    interface GetShopDetailResult {
        shopId: number;
        toShopId: number;
        platformStatus: number;
        status: number;
        cooperateUrl: any;
        commissionRate: string;
        cooperationStatus: number;
        cooperationBalance: number;
        withdrawCooperationBalance: number;
        lotteryIds: string;
        lotteryNames: any;
        creditLimit: number;
        remindLimit: number;
    }

    interface ListCooperationShopResult {
        total: number;
        pages: number;
        totalAmount: any;
        rows: Class1[] | null;
    }

    interface SearchShopCommandQuery {
        searchValue: string;
    }

    interface SearchShopResult {
        shopId: number;
        shopName: string;
        ownerName: string;
        shopTelephone: string;
        shopWechat: string;
        shopAddress: string;
        shopNotice: string;
        inviteCode: string;
        shopType: number;
        autoLottery: string;
        showLottery: any;
        rechargeMinAmount: any;
        rechargeMaxAmount: any;
        withdrawMinAmount: any;
        withdrawMaxAmount: any;
        balance: number;
        withdrawBalance: any;
        ticketRate: any;
        withdrawMaxCount: any;
        registerSwitch: any;
        orderTimeSwitch: any;
        orderSoundSwitch: any;
        orderVoice: string;
        homePageSwitch: any;
        shopInformationSwitch: any;
        networkOrderSwitch: any;
        imgUrl: string;
        createTime: string;
        recomShopId: string;
        shopStatus: number;
        lotteryIds: string;
        lotteryNames: string[] | null;
        lotteryDtos: Class6[] | null;
    }

    interface ShopStatisticsResult {
        shopId: number;
        dispatchAmount: number;
        ticketAmount: number;
        sendPrizesAmount: number;
        addAmount: number;
        reduceAmount: number;
        rechargeAmount: number;
        withdrawAmount: number;
        commission: number;
        statisticsDate: any;
    }

}
