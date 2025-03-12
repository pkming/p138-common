
declare namespace BusinessShopMessage {

    interface ListShopMessageCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface ListShopMessageCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode: number;
        messageType: MessageType;
    }

    interface ListShopMessageResult {
        list: ListShopMessageRow[] | null;
        total: number;
        query: ListShopMessageCommand;
        totalAmount?: string;
    }

    interface ListShopMessageRow {
        searchValue: string;
        createBy: string;
        createdAt: number;
        updateBy: string;
        updatedAt: number;
        remark: string;
        params: any;
        orderID: number;
        shopCode: number;
        orderNo: string;
        type: MessageType;
        content: string;
        status: number;
        amount: string;
        endWallet: string;
    }

    // 1: 接受订单, 2: 订单退款, 3: 余额不足, 4: 中奖消息, 5: 充值消息, 6: 提现消息, 7: 转账消息
    type MessageType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

}
