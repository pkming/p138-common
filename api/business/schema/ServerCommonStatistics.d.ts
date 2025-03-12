
declare namespace ServerCommonStatistics {

    interface Class15 {
        userId: number;
        nickName: string;
        imgUrl: string;
        levelId: number;
        mobile: string;
        lotteryAmount: string;
        lotteryCount: number;
        shopId: number;
    }

    interface Class17 {
        userId: number;
        mobile: string;
        nickName: any;
        imgUrl: string;
        certification: number;
        realName: any;
        idNo: any;
        cardNo: any;
        accountBank: any;
        accountPlace: any;
        alipayAccount: any;
        proxyTime: string;
        saleAmount: string;
        proxyShare: number;
        proxyDays: number;
        shopName: string;
        balance: string;
        proxyStatus: number;
        createTime: any;
        commission: string;
        apCommission: string;
    }

    interface GetBonusStatisticsInfoResult {
        bonusCount: number;
        bonusAmount: number;
        bonusList: any[] | null;
    }

    interface GetCooperationIncomeResult {
        cooperationIncome: number;
        cooperationIncomeList: any[] | null;
    }

    interface GetCustomerRechargeListResult {
        rechargeAmount: number;
        rechargeFee: number;
        rechargeList: any[] | null;
    }

    interface GetCustomerWithdrawListResult {
        total: number;
        pages: number;
        totalAmount: any;
        rows: any[] | null;
    }

    interface GetCustomerWithdrawTotalResult {
        amount: string;
    }

    interface GetDeductResult {
        operateAmount: number;
        operateAmountList: any[] | null;
    }

    interface GetLotteryUserListResult {
        lotteryCount: number;
        lotteryAmount: string;
        lotteryList: Class15[] | null;
    }

    interface GetPresentAddResult {
        operateAmount: number;
        operateAmountList: any[] | null;
    }

    interface GetPresentPlusResult {
        operateAmount: number;
        operateAmountList: any[] | null;
    }

    interface GetProxyCountResult {
        registerCount: number;
        registerUserCount: number;
        saleAmount: string;
        commission: string;
        returnAmount: string;
    }

    interface GetProxyStatisticsListResult {
        total: number;
        pages: number;
        totalAmount: any;
        rows: Class17[] | null;
    }

    interface GetRegisterListResult {
        registerCount: number;
        registerList: any;
    }

    interface GetServiceChargeResult {
        totalServiceCharge: number;
        totalServiceChargeList: any[] | null;
    }

    interface GetTicketStatisticsInfoResult {
        bonusCount: number;
        bonusAmount: number;
        bonusList: any[] | null;
    }

    interface GetTotalStatisticsInfoCommandQuery {
        shopCode: number;
        startDate?: any;
        endDate?: any;
    }

    interface GetTotalStatisticsInfoResult {
        shopCode: number;
        ticketAmount: string;
        bonusAmount: string;
        rechargeAmount: string;
        withdrawAmount: string;
        cooperationIncome: string;
        serviceCharge: string;
        addAmount: string;
        reduceAmount: string;
        bonusAddAmount: string;
        bonusReduceAmount: string;
        lotteryUsers: number;
        followCommission: number | null;
        settledShop: number;
        proxyUser: number;
        rechargeOrderAmount: string;
        withdrawOrderAmount: string;
        registerUsers: number;
        todayTime: any;
        yesterdayTime: any;
        totalUsers: number;
        todayShopBalance: string;
        yesterdayShopBalance: string;
        shopBalanceChange: string;
        todayEscrowBalance: string;
        yesterdayEscrowBalance: string;
        escrowBalanceChange: string;
    }

    interface GetWithholdResult {
        operateAmount: number;
        operateAmountList: any[] | null;
    }

}
