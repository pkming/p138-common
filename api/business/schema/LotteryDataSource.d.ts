
declare namespace LotteryDataSource {

    interface CharityLotteryDataSource {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        omissionList: string[] | null;
        currentTermNo: string;
        buyEndTime: string;
        vos: VosDetails[] | null;
        lotteryName: CommonCommonEnum.LotteryName;
    }

    interface CompetitionOddsDto {
        betName: string | null;
        betItem: string;
        odds: number | null;
        winColor: string | null;
        status: string | null;
        rate: number | null;
    }

    interface CreateCharityLotteryCommand {
        omissionList: string[] | null;
        currentTermNo: string;
        buyEndTime: string;
        vos: VosDetails[] | null;
        lotteryName: CommonCommonEnum.LotteryName;
    }

    interface CreateLeagueSportsLotteryCommand {
        lotteryName: CommonCommonEnum.LotteryName;
        leagueSportsLottery: Record<string,Record<string,LotteryDataSource.MatchInfo[] | null> | null> | null;
    }

    interface HandicapDto {
        playChineseName: string | null;
        playEnglishName: string | null;
        single: string | null;
        hanicap: string | null;
        competitionOddsDtos: CompetitionOddsDto[] | null;
    }

    interface ListCharityLotteryCommandQuery {
        lotteryName: string;
    }

    interface ListLeagueSportsLotteryCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
    }

    interface ListTimeSportsLotteryCommandQuery {
        lotteryName: CommonCommonEnum.LotteryName;
    }

    interface MatchInfo {
        competitionTime: string;
        buyEndTime: string;
        processDate: string | null;
        matchNum: string;
        home: string;
        homeLogo: string | null;
        homeId: number;
        homeLeagueSort: number | null;
        awayLeagueSort: number | null;
        away: string;
        awayLogo: string | null;
        awayId: number;
        leagueName: string;
        leagueId: number | null;
        bdTermNo: number | null;
        termNo: number | null;
        sfcTermNo: number | null;
        jqcTermNo: number | null;
        bdNum: number | null;
        sfcNum: number | null;
        fourNum: number | null;
        sixNum: number | null;
        bdGgNum: number | null;
        result: string | null;
        matchScore: string | null;
        handicapDtos: HandicapDto[] | null;
        competitionId: number;
    }

    interface SportsLotteryDataSource {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        league: string;
        date: string;
        lotteryName: CommonCommonEnum.LotteryName;
        leagueSportsLottery: MatchInfo[] | null;
    }

    interface TimeSportsLotteryResult {
        date: string;
        timeSportsLottery: MatchInfo[] | null;
    }

    interface VosDetails {
        lotteryName: string;
        termNo: string;
        openDate: string;
        result: string;
        saleAmount: string;
        poolBonus: string;
        nineSaleAmount: string | null;
        ninePoolBonus: string | null;
        nextOpenDate: string | null;
        vos: VosDetails[] | null;
        competitionVos: string | null;
    }

}
