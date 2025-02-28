
declare namespace CommonLotteryTrend {

    interface CreateTrendCommand {
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        trendType: TrendType;
        trendInfos: TrendInfo[] | null;
        totalCount: string;
        avgCount: string;
        maxCount: string;
        minCount: string;
    }

    interface ListTrendCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
    }

    interface Trend {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        trendType: TrendType;
        trendInfos: TrendInfo[] | null;
        totalCount: string;
        avgCount: string;
        maxCount: string;
        minCount: string;
    }

    interface TrendInfo {
        issue: string;
        prizeNumber: string;
        numbers: TrendNumber[] | null;
    }

    interface TrendNumber {
        num: string;
        prize: boolean | null;
    }

    // 1: 基本走势, 2: 大小走势, 3: 奇偶数走势, 4: 和值走势, 5: 连号走势, 6: 跨度走势
    type TrendType = 1 | 2 | 3 | 4 | 5 | 6;

}
