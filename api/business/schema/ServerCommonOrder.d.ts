
declare namespace ServerCommonOrder {

    interface ArrangedFiveBetContent {
        arrangedFivePlay: CommonCommonEnum.ArrangedFivePlay;
        fixedPositionArrangedFivePlayNumbers: Record<CommonCommonEnum.FixedPositionArrangedFivePlayParamType,string[] | null> | null;
        combinationArrangedFivePlayNumbers: Record<CommonCommonEnum.CombinationArrangedFivePlayParamType,string[] | null> | null;
    }

    interface ArrangedThreeBetContent {
        arrangedThreePlay: CommonCommonEnum.ArrangedThreePlay;
        straightSelectionArrangedThreePlayNumbers: Record<CommonCommonEnum.StraightSelectionArrangedThreePlayParamType,string> | null;
        threeCombinedArrangedThreePlayNumbers: Record<CommonCommonEnum.ThreeCombinedArrangedThreePlayParamType,string> | null;
        sixCombinedArrangedThreePlayNumbers: Record<CommonCommonEnum.SixCombinedArrangedThreePlayParamType,string> | null;
        groupSelectionArrangedThreePlayNumbers: Record<CommonCommonEnum.GroupSelectionArrangedThreePlayParamType,string> | null;
    }

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

    interface BonusCalculatorCommand {
        lotteryName: CommonCommonEnum.LotteryName;
        betAmount: string;
        betMultiple: number;
        betTypeName: string;
        playName: string;
        matches: Match[] | null;
        freePassTypes: CommonCommonEnum.FreeParlayPassType[] | null;
        mxnParlayType: CommonCommonEnum.MXNParlayType;
        passCategory: CommonCommonEnum.PassCategory;
        superLottoBetContent: SuperLottoBetContent;
        sevenHappyBetContent: SevenHappyBetContent;
        sevenStartBetContent: SevenStarBetContent;
        arrangedFiveBetContent: ArrangedFiveBetContent;
        arrangedThreeBetContent: ArrangedThreeBetContent;
    }

    interface BonusCalculatorResult {
        totalBetCount: number;
        totalBetAmount: number;
        minWinAmount?: number;
        maxWinAmount?: number;
        betMultiple: number;
    }

    interface CreateOrderOrSaveSchemeCommand {
        betAmount: string;
        userID: string;
        username: string;
        buyEndTime: string;
        lotteryId: string;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryType: CommonCommonEnum.LotteryType;
        winAmount: string;
        betMultiple: number;
        betPlay: string | null;
        playName: string;
        winMixAmount: string;
        betCount: number;
        shopCode: number;
        needUploadTicket: boolean;
        lotteryCategory: CommonCommonEnum.LotteryCategory;
        termNo?: string | null;
        ticketUrl?: string | null;
        append?: string | null;
        bettingString: string | null;
        betContentTraditionalLotteryList?: BetContentSportsLottery[] | null;
        betContentDigitalLottery?: BetContentDigitalLottery[] | null;
        betContentSportsLotteryList?: BetContentSportsLottery[] | null;
        bonusDetailList?: string | null;
        calcAmount?: string;
        cancelTimestamp?: number;
        commission: number;
        commissionRate: number;
        lotteryNumber: string | null;
        optimizationType?: OptimizationType;
        paymentStatus: PaymentStatus;
        paymentMethod?: PaymentMethod | null;
        programContent?: number | null;
        remark?: string;
        returnAmount?: string;
        returnMultiple?: string;
        orderStatus?: CommonCommonEnum.OrderStatus;
        winStatus: CommonCommonEnum.WinStatus | null;
        orderType: CommonCommonEnum.OrderType | null;
        currentOrderNo: string;
        orderParentID?: string;
        orderParentNo?: string;
        orderNo?: string;
        lotteryIcon: string | null;
    }

    interface CreateOrderOrSaveSchemeResult {
        orderId: string;
        orderNo: string;
    }

    interface GetBetRecordCountCommandPathParams {
        userID: string;
    }

    interface GetBetRecordCountResult {
        pendingTicketCount: number;
        toBeAwardedCount: number;
        winCount: number;
    }

    interface ListOrderCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListOrderCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        orderID?: string;
        orderNo?: string | null;
        userID?: string;
        orderStatus?: CommonCommonEnum.OrderStatus;
    }

    interface ListOrderResult {
        list: ListOrderRow[] | null;
        total: number;
        query: ListOrderCommand;
        totalAmount?: string;
    }

    interface ListOrderRow {
        lotteryName: CommonCommonEnum.LotteryName;
        orderType: CommonCommonEnum.OrderType;
        playType: string | null;
        betAmount: string;
        ticketStatus: string;
        orderStatus: CommonCommonEnum.OrderStatus;
        paymentStatus: PaymentStatus;
        orderTime: number;
        winStatus: CommonCommonEnum.WinStatus;
        returnAmount: string;
        orderId: string;
        orderNo: string;
        imgUrl: string | null;
        nickName: string | null;
        mobile: string | null;
        userId: string | null;
        balance: string | null;
        createdAt: number;
        orderStatusChinese: string;
    }

    interface LotteryOrder {
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
        optimizationType: OptimizationType;
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
        paymentStatus: PaymentStatus;
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
        paymentMethod?: PaymentMethod;
    }

    interface Match {
        id: string;
    }

    interface Optimization {
        odds: string;
        bonus: string;
        betItem: string[] | null;
        multipart: string;
        betFreePass: string;
    }

    interface PathIDPathParams {
        orderId: string;
    }

    interface SevenHappyBetContent {
        sevenHappyNumbers: Record<number,string[] | null> | null;
    }

    interface SevenStarBetContent {
        sevenStarNumbers: Record<CommonCommonEnum.SevenStarPlayParamType,string[] | null> | null;
    }

    interface SuperLottoBetContent {
        superLottoPlay: CommonCommonEnum.SuperLottoPlay;
        standardNumbers: Record<CommonCommonEnum.StandardSelectionSuperLottoPlayParamType,string[] | null> | null;
        danTuoNumbers: Record<CommonCommonEnum.DanTuoSelectionSuperLottoPlayParamType,string[] | null> | null;
    }

    interface UpdateOrderBonusCommand {
        orderID: string;
        shopCode: number;
        userID: string;
        isOperator: boolean;
        userType: ServerCommonUser.UserType;
        username: string;
        shopName: string;
        nickName: string;
        calcAmount: string;
    }

    interface UpdateOrderTicketCommand {
        orderID: string;
        orderStatus: CommonCommonEnum.OrderStatus | null;
        shopCode: number;
        userID: string;
        isOperator: boolean;
        userType: ServerCommonUser.UserType;
        username: string;
        shopName: string;
        nickName: string;
        ticketURL: string | null;
        betContentDigitalLotteryList: BetContentDigitalLottery[] | null;
        betContentSportsLotteryList: BetContentSportsLottery[] | null;
        betContentTraditionalLotteryList: BetContentSportsLottery[] | null;
        remark: string | null;
    }

    // 1: 平均优化, 2: 博热优化, 3: 博冷优化
    type OptimizationType = 1 | 2 | 3;

    // 1: 钱包余额, 2: 支付宝, 3: 微信支付, 4: 快捷支付, 5: 二维码收款, 6: 银行卡充值
    type PaymentMethod = 1 | 2 | 3 | 4 | 5 | 6;

    // 1: 等待支付, 2: 已出已支付票
    type PaymentStatus = 1 | 2;

}
