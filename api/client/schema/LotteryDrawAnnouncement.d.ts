
declare namespace LotteryDrawAnnouncement {

    interface CompetitionDetail {
        termNo: string | null;
        round: string | null;
        home: string;
        away: string;
        matchScore: string | null;
        halfMatchScore: string | null;
        result: string;
    }

    interface CreateDigitalDrawAnnouncementCommand {
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        lotteryName: CommonCommonEnum.LotteryName;
        digitalDrawDetail: Record<string,LotteryDrawAnnouncement.DigitalDrawDetail[] | null> | null;
    }

    interface CreateSportsDrawAnnouncementCommand {
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        termNo: string;
        sportsVos: SportsMatch[] | null;
    }

    interface CreateSportsStatisticsCommand {
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryStatisticsVos: LotteryStatisticsVo[] | null;
    }

    interface DeleteSportsStatisticsCommandPathParams {
        sportsStatisticsID: string;
    }

    interface DigitalDrawAnnouncement {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        digitalDrawDetail: Record<string,LotteryDrawAnnouncement.DigitalDrawDetail[] | null> | null;
    }

    interface DigitalDrawDetail {
        lotteryName: string;
        termNo: string;
        openDate: string;
        result: string;
        saleAmount: string;
        poolBonus: string;
        nineSaleAmount: string | null;
        ninePoolBonus: string | null;
        nextOpenDate: string | null;
        vos: LotteryPrize[] | null;
        competitionVos: CompetitionDetail[] | null;
    }

    interface ListDigitalDrawAnnouncementCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
    }

    interface ListSportsDrawAnnouncementCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
        termNo: string;
    }

    interface ListSportsStatisticsCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
    }

    interface LotteryPrize {
        termNo: string;
        name: string;
        num: string;
        amount: string;
        addNum: number | null;
        addAmount: string | null;
    }

    interface LotteryStatistics {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        lotteryStatisticsVos: LotteryStatisticsVo[] | null;
    }

    interface LotteryStatisticsVo {
        termNo: string;
        num: string;
        processDate?: string;
        competitionNum: number;
        bdTermNo: string | null;
    }

    interface SportsDrawAnnouncement {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        termNo: string;
        sportsVos: SportsMatch[] | null;
    }

    interface SportsMatch {
        home: string;
        away: string;
        leagueName: string;
        leagueColor: string;
        matchScore: string;
        asiaHandicap: string | null;
        bsHandicap: string | null;
        result: string | null;
        asiaResult: string | null;
        pointResult: string | null;
        bigSmallResult: string | null;
        totalScoreResult: string | null;
        matchScoreResult: string | null;
        halfFullResult: string | null;
        upDownResult: string | null;
        jcHandicap: string | null;
        competitionTime: string;
        jcHandicapResult: string | null;
        matchNum: string | null;
        bdNum: string | null;
        halfMatchScore: string | null;
    }

}
