
declare namespace ShopDistributePrize {

    interface DistributePrizeApiCommand {
        orderIDList: string[] | null;
        userID: string;
    }

    interface DistributePrizeApiCommandHeader {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface DistributePrizeResult {
        successCount: number;
        successReturnAmount: string;
        errorCount: number;
        errorMsg: string | null;
    }

    interface ListPendingDistributePrizeCommandQuery {
        shopCode: number;
        ticketType: CommonCommonEnum.TicketType | null;
    }

    interface ListPendingDistributePrizeCommandResult {
        shopCode: number;
        orderId: string;
        lotteryIcon: string;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        orderType: CommonCommonEnum.OrderType;
        ticketType: CommonCommonEnum.TicketType;
        calcAmount: string;
        returnAmount: string;
        playName: string;
        orderNo: string;
        ticketTime: any;
    }

    interface ListPrizesDistributedCommandQuery {
        shopCode: number;
        ticketType: CommonCommonEnum.TicketType | null;
    }

    interface ListPrizesDistributedResult {
        shopCode: number;
        orderId: string;
        lotteryIcon: string;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        orderType: CommonCommonEnum.OrderType;
        ticketType: CommonCommonEnum.TicketType;
        calcAmount: string;
        returnAmount: string;
        playName: string;
        orderNo: string;
        ticketTime: any;
    }

}
