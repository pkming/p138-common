
declare namespace CommonTrusteeshipBalance {

    interface FrozenAmountDetail {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        remark: string;
        frozenAmount: string;
        shopCode: number;
        orderID: string;
        orderNo: string;
        frozenType: FrozenType;
        userID: string;
        userType: ServerCommonUser.UserType;
        frozenStatus: FrozenStatus;
    }

    interface GetAllUserBalanceCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface GetAllUserBalanceCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode: number;
    }

    interface GetAllUserBalanceResult {
        list: GetAllUserBalanceRow[] | null;
        total: number;
        query: GetAllUserBalanceCommand;
        totalAmount?: string;
    }

    interface GetAllUserBalanceRow {
        shopCode: number;
        userID: string;
        userType: ServerCommonUser.UserType;
        avatar: string;
        username: string;
        nickname: string;
        balance: string;
        createdAt: number;
        status: CommonCommonEnum.OrderStatus;
        orderDetailList: any;
        winStatus: CommonCommonEnum.WinStatus;
        levelId: number;
        role: number;
    }

    interface GetUserFrozenAmountDetailCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface GetUserFrozenAmountDetailCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode: number;
    }

    interface GetUserFrozenAmountDetailResult {
        list: FrozenAmountDetail[] | null;
        total: number;
        query: GetUserFrozenAmountDetailCommand;
        totalAmount: string;
    }

    interface ListFrozenAmountCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListFrozenAmountCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number | null;
    }

    interface ListFrozenAmountResult {
        list: FrozenAmountDetail[] | null;
        total: number;
        query: ListFrozenAmountCommand;
    }

    // 1: 已冻结, 2: 已解冻
    type FrozenStatus = 1 | 2;

    // 等待店主接单导致: 等待店主接单导致, 等待店主出票导致: 等待店主出票导致
    type FrozenType = 1 | 2;

}
