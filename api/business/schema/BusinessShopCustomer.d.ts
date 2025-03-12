
declare namespace BusinessShopCustomer {

    interface GetProxyUnderTotalUserBalanceCommandQuery {
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number;
    }

    interface GetProxyUnderTotalUserBalanceResult {
        totalUserBalance: string;
    }

    interface GetProxyUnderUserOrderAmountCommandQuery {
        startTime?: number | null;
        endTime?: number | null;
        agentDataType: AgentDataType;
        shopCode: number;
        userID: string;
    }

    interface GetProxyUnderUserOrderAmountResult {
        totalAmount: string;
        winTotalAmount: string;
    }

    interface ListCustomerCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface ListCustomerCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode: number;
        filterName?: string | null;
        customerUserType: CustomerUserType | null;
    }

    interface ListCustomerResult {
        list: ListCustomerRow[] | null;
        total: number;
        query: ListCustomerCommand;
        totalAmount: string;
    }

    interface ListCustomerRow {
        userID: string;
        userType: ServerCommonUser.UserType;
        avatar: string;
        username: string;
        nickName: string;
        balance: string;
        createdAt: number;
        orderStatus: CommonCommonEnum.OrderStatus;
        status: string;
        orderDetailList: OrderDetail[] | null;
        winStatus: CommonCommonEnum.WinStatus | null;
        vipLevel: number;
        role: number;
    }

    interface ListOrderRow {
        userType: ServerCommonUser.UserType;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        orderType: CommonCommonEnum.OrderType;
        playType: string;
        betAmount: string;
        ticketStatus: CommonCommonEnum.OrderStatus;
        paymentStatus: ServerCommonOrder.PaymentStatus;
        orderTime: number;
        winStatus: CommonCommonEnum.WinStatus;
        returnAmount: string;
        orderId: string;
        orderNo: string;
        avatar: string;
        nickName: string;
        userID: string;
        username: string;
        createdAt: number;
    }

    interface ListProxyUnderUserBetDataOrWinDataCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        lotteryName: CommonCommonEnum.LotteryName;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListProxyUnderUserBetDataOrWinDataCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number;
    }

    interface ListProxyUnderUserBetDataOrWinDataResult {
        list: ListOrderRow[] | null;
        total: number;
        query: ListProxyUnderUserBetDataOrWinDataCommand;
        totalAmount: string;
    }

    interface ListProxyUnderUserCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListProxyUnderUserCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number;
    }

    interface ListProxyUnderUserResult {
        list: ListCustomerRow[] | null;
        total: number;
        query: ListProxyUnderUserCommand;
        totalAmount: string;
    }

    interface OrderDetail {
        betAmount: string;
        orderID: string;
        createdAt: number;
        ticketStatus: CommonCommonEnum.OrderStatus;
        orderStatus: CommonCommonEnum.OrderStatus;
        winStatus: CommonCommonEnum.WinStatus;
        orderType: CommonCommonEnum.OrderType;
    }

    interface TransferAgentCommand {
        userID: string;
        shopCode: number;
        agentUserId: string | null;
        agentUserType: ServerCommonUser.UserType | null;
        agentReferralCode: string | null;
        agentUsername: string | null;
        commissionRatio?: number | null;
    }

    interface UpdateAgentCommissionCommand {
        agentUserId: string | null;
        commissionRatio: number | null;
    }

    // 1: 投注数据, 2: 中奖数据
    type AgentDataType = 1 | 2;

    // 1: 星标用户, 2: 注销申请, 3: 下单用户
    type CustomerUserType = 1 | 2 | 3;

}
