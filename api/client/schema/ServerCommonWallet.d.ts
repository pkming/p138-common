
declare namespace ServerCommonWallet {

    interface GetAllUserWalletTransactionCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface GetAllUserWalletTransactionCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        walletID?: string | null;
        transactionType?: TransactionType | null;
        userType?: ServerCommonUser.UserType | null;
        userID?: string | null;
    }

    interface GetAllUserWalletTransactionResult {
        list: LotteryWalletTransaction[] | null;
        total: number;
        query: GetAllUserWalletTransactionCommand;
    }

    interface GetUserWalletCommandQuery {
        userID: string | null;
        username: string | null;
        userType?: ServerCommonUser.UserType;
    }

    interface GetUserWalletTransactionCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface GetUserWalletTransactionCommandPathParams {
        walletID: string;
    }

    interface GetUserWalletTransactionCommandQueryWithoutPath {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        transactionType?: TransactionType | null;
        userType?: ServerCommonUser.UserType | null;
        userID?: string | null;
    }

    interface GetUserWalletTransactionResult {
        list: LotteryWalletTransaction[] | null;
        total: number;
        query: GetUserWalletTransactionCommand;
    }

    interface GetWalletTotalAmountCommandQuery {
        shopCode?: number | null;
        walletID?: string | null;
        userId?: string | null;
        userType?: ServerCommonUser.UserType | null;
    }

    interface GetWalletTotalAmountResult {
        totalAmount: string;
    }

    interface ListPaymentMethodCommandQuery {
        shopCode: string;
        userID: string;
    }

    interface ListPaymentMethodResult {
        paymentMethodList: PlatformPaymentMethod[] | null;
    }

    interface ListPaymentRecordCommandQuery {
        shopCode: string;
        userID: string;
        beginAt: string;
        endAt: string;
    }

    interface ListUserWalletsCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListUserWalletsCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number | null;
        userType?: ServerCommonUser.UserType | null;
    }

    interface ListUserWalletsResult {
        list: UserWallet[] | null;
        total: number;
        query: ListUserWalletsCommand;
    }

    interface LotteryWalletTransaction {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        userWalletID: string;
        receiverUserWalletID: string;
        receiverUsername: string;
        senderUserWalletID: string;
        senderUsername: string;
        userID: string;
        userType: ServerCommonUser.UserType;
        transactionType: TransactionType;
        amount: string;
        preBalance: string;
        postBalance: string;
        transactionStatus: TransactionStatus;
        relatedOrderId: string | null;
        transactionDescription: string;
        transactionTime: any;
        operatorType: OperatorType;
        operator: string;
        shopCode: number;
        shopName: string;
        remark: string;
        transactionOrderNo: string;
    }

    interface PlatformPaymentMethod {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        methodId: number;
        shopId: any;
        methodType: PaymentMethod;
        methodName: string;
        methodMaxAmount: string;
        methodMinAmount: string;
        methodSort: number;
        methodSwitch: number;
        methodDesc: string;
        methodUrl: string;
        channelName: string;
        oldFlag: number;
        openStartTime: string;
        openEndTime: string;
        openTime: string;
        paymentQrcodeOne: string;
        paymentQrcodeTwo: string;
        paymentQrcodeThree: string;
        warnDesc: any;
        createTime: any;
    }

    interface UserWallet {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        userID: string;
        userType: ServerCommonUser.UserType;
        username: string;
        shopCode: number;
        balance: string;
        currency: string;
        frozenBalance: string;
        withdrawBalance: string;
        totalRechargeAmount: string;
        totalWithdrawalAmount: string;
        totalBettingAmount: string;
        totalWinningAmount: string;
        walletStatus: LotteryUserWalletStatus;
        lastTransactionTime: any;
    }

    interface UserWalletRechargeCommandPathParams {
        walletID: string;
    }

    interface UserWalletRechargeCommandWithoutPath {
        amount: string;
        currency: string;
        userID: string;
    }

    interface UserWalletRechargeResult {
        walletID: string;
    }

    interface UserWalletTransferCommand {
        amount: string;
        senderUsername: string;
        receiverUsername: string;
        senderUserID: string;
        receiverUserID: string;
        currency?: string;
        paymentPassword: string;
        userID: string;
    }

    interface UserWalletWithdrawalCommandPathParams {
        walletID: string;
    }

    interface UserWalletWithdrawalCommandWithoutPath {
        userID: string;
        amount: string;
        currency: string;
    }

    // frozen: 冻结, active: 启用, disabled: 禁用
    type LotteryUserWalletStatus = 'frozen' | 'active' | 'disabled';

    // manual: 手动, api: API调用, system: 系统操作, user: 用户操作
    type OperatorType = 'manual' | 'api' | 'system' | 'user';

    // 1: 钱包余额, 2: 支付宝, 3: 微信支付, 4: 快捷支付, 5: 二维码收款, 6: 银行卡充值, 7: 泰达币
    type PaymentMethod = 1 | 2 | 3 | 4 | 5 | 6 | 7;

    // success: 交易成功, pending: 审核中, failed: 交易失败
    type TransactionStatus = 'success' | 'pending' | 'failed';

    // 充值: 充值, 提现: 提款(提现), 投注: 投注, 返奖: 返奖, 服务费: 服务费, 退款: 退款, 收入: 收入, 转账: 转账, 其他支出: 其他支出, 代购支付: 代购支付, 店主加款: 店主加款, 店主扣款: 店主扣款, 赠送加款: 赠送加款, 赠送扣款: 赠送扣款
    type TransactionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

}
