
declare namespace PkgBusinessOrder {

    interface BetContentDigitalLottery {
        betContentDigitalLotteryID?: string;
        betPlay: string;
        playType: string | null;
        betItem: string;
        betAmount: string;
        betMultiple: number;
        orderItemID?: string;
    }

    interface BetContentSportsLottery {
        betContentSportsLotteryID?: string;
        competitionSessions: string;
        matchScore?: string | null;
        halfMatchScore?: string | null;
        home: string;
        away: string;
        orderItemID?: string;
        betPlayList: BetPlayList[] | null;
    }

    interface BetItem {
        betItem: string;
        playType: string | null;
        betPlay: string;
        betHandicap: string;
        betOdds: string;
        orderItemId: string;
        competitionSessions: string;
        hasHit: number;
        kjOdds: string | null;
    }

    interface BetPlayList {
        betPlay: string;
        betHandicap: string | null;
        betItem: string;
        betOdds: string;
        result: string | null;
        hasHit: number | null;
        kjOdds?: string | null;
        playType?: string | null;
        orderItemID?: string | null;
        competitionSession?: string | null;
    }

    interface GetPendingOrderCommandHeader {
        userID: string;
    }

    interface GetPendingOrderCommandQuery {
        shopCode: number;
        lotteryName?: CommonCommonEnum.LotteryName | null;
    }

    interface GetPendingOrderResult {
        waitNumber: number;
        waitTicketNumber: number;
        cooperateTicketNumber: number;
        cooperateWaitNumber: number;
    }

    interface GetReceiveOrderCommandQuery {
        sort: Sort | null;
        shopCode: number;
        lotteryName?: CommonCommonEnum.LotteryName | null;
        orderStatus?: CommonCommonEnum.OrderStatus | null;
    }

    interface GetReceiveOrderDetailCommandPathParams {
        orderID: string;
    }

    interface GetReceiveOrderDetailResult {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        orderType: CommonCommonEnum.OrderType;
        estimatedBonus: string;
        shopName: string;
        playType: string | null;
        betPlay: string | null;
        winMixAmount: string;
        lotteryIcon: string | null;
        nickname: string | null;
        phoneNumber: string | null;
        showType: string | null;
        totalNumber: number | null;
        currentNumber: number | null;
        mixAmount: string | null;
        betAmount: string;
        selfCopies: string | null;
        syndicateUserList: string[] | null;
        syndicateUsers: string | null;
        ticketType: CommonCommonEnum.TicketType | null;
        guaranteedCopies: string | null;
        bonusDetails: string | null;
        numberCopies: string | null;
        operatename: string | null;
        operateUserId: string;
        operateNickName: string | null;
        ticketNumber: number | null;
        optimization: Optimization;
        optimizationType: ServerCommonOrder.OptimizationType;
        receivePermission: boolean | null;
        ticketShopCode: number | null;
        ticketShopName: string;
        stopAfterWin: boolean | null;
        isTicketStatus: boolean | null;
        ticketTime: any;
        returnTicketUrl: string | null;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName | null;
        lotteryType: CommonCommonEnum.LotteryType;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        termNo: string;
        betCount: number;
        buyEndTime: string;
        winAmount: string;
        calcAmount: string;
        returnAmount: string;
        ticketStatus: CommonCommonEnum.OrderStatus;
        paymentStatus: ServerCommonOrder.PaymentStatus;
        winStatus: CommonCommonEnum.WinStatus;
        username: string;
        userID: string;
        lotteryNumber: string | null;
        betMultiple: number;
        bettingString: string;
        remark: string;
        returnMultiple: string;
        needUploadTicket: boolean;
        ticketUrl: string | null;
        commission: number;
        commissionRate: number;
        billUsername: string;
        billUserId: string;
        orderParentID: string;
        orderParentNo: string;
        lotteryId: string;
        orderNo: string;
        currentOrderNo: string;
        append: string;
        programContent: number | null;
        bonusDetailList: string | null;
        betContentDigitalLotteryList: BetContentDigitalLottery[] | null;
        betContentSportsLotteryList: BetContentSportsLottery[] | null;
        betContentTraditionalLotteryList: BetContentSportsLottery[] | null;
        cancelTimestamp: number;
        orderStatus: CommonCommonEnum.OrderStatus;
        shopCode: number;
        playName: string;
        paymentMethod?: ServerCommonOrder.PaymentMethod;
        vos: Vo[] | null;
        orderItemVoList: OrderItemVo[] | null;
    }

    interface GetReceiveOrderResult {
        waitNumber: number;
        waitTicketNumber: number;
        cooperateTicketNumber: number;
        cooperateWaitNumber: number;
        orderItems: OrderItem[] | null;
    }

    interface Optimization {
        odds: string;
        bonus: string;
        betItem: string[] | null;
        multipart: string;
        betFreePass: string;
    }

    interface OrderItem {
        lotteryIcon: string | null;
        lotteryName: CommonCommonEnum.LotteryName;
        playName: string;
        nickName: string | null;
        createTime: number;
        buyEndTime: string;
        returnAmount: string;
        amount: string;
        orderNo: string;
        orderId: string;
        orderType: CommonCommonEnum.OrderType;
        ticketStatus: CommonCommonEnum.OrderStatus;
        orderStatus: CommonCommonEnum.OrderStatus;
        ticketType: CommonCommonEnum.TicketType | null;
        totalNumber: number | null;
        currentNumber: number | null;
        append: string;
    }

    interface OrderItemVo {
        competitionSessions: string;
        bugEndTime: string;
        home: string;
        away: string;
        matchScore: string;
        halfMatchScore: string;
        itemsMap: Record<string,PkgBusinessOrder.BetItem[] | null> | null;
        result: string;
        betAmount: string;
        betMultiple: number;
        orderItemId: string;
    }

    interface OrderQueryCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface OrderQueryCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopType: string | null;
        orderType: CommonCommonEnum.OrderType | null;
        orderNo: string | null;
        lotteryName: CommonCommonEnum.LotteryName | null;
        orderStatus?: CommonCommonEnum.OrderStatus;
        ticketType: CommonCommonEnum.TicketType | null;
        shopCode: number;
        userID: string | null;
    }

    interface OrderQueryResult {
        list: OrderQueryRow[] | null;
        total: number;
        query: OrderQueryCommand;
        totalAmount?: string;
    }

    interface OrderQueryRow {
        lotteryId: string;
        lotteryName: CommonCommonEnum.LotteryName;
        orderType: CommonCommonEnum.OrderType;
        betAmount: string;
        ticketStatus: CommonCommonEnum.OrderStatus;
        orderStatus: CommonCommonEnum.OrderStatus;
        winStatus: CommonCommonEnum.WinStatus;
        orderNo: string;
        returnAmount: string;
        calcAmount: string;
        playName: string;
        lotteryIcon: string | null;
        createdAt: number;
        totalNumber: number | null;
        currentNumber: number | null;
        orderId: string;
        status: string;
    }

    interface Vo {
        betFreePass: string;
        betPlay: string;
        betItems: Record<string,PkgBusinessOrder.BetItem[] | null> | null;
        betMultiple: number;
        mixAmount: string;
        betAmount: string;
        ticketNum: number;
        itemsMap: Record<string,PkgBusinessOrder.BetItem[] | null> | null;
    }


    type Sort = 'createdAt' | 'buyEndTime' | 'betAmount';

}
