
declare namespace ServerCommonWallet {

    interface AddPlatformPaymentMethodCommandPathParams {
        paymentMethodID: string;
    }

    interface AddPlatformPaymentMethodCommandWithoutPath {
        userID: string;
        userType: ServerCommonUser.UserType;
        paymentMethodList: PaymentMethodInfo[] | null;
    }

    interface ApplyForActivationShopCustomerPaymentMethodCommandPathParams {
        paymentMethodID: string;
    }

    interface ApplyForActivationShopCustomerPaymentMethodCommandWithoutPath {
        shopCode: number;
        paymentParam?: Record<string,any> | null;
    }

    interface ApplyParam {
        applyParamID?: string;
        key: string;
        tips: string;
        label: string;
        type: string;
        required: boolean;
    }

    interface ApplyRemind {
        applyRemindID?: string;
        turnNo: number;
        image?: string;
        qrcode?: string;
    }

    interface CreatePlatformPaymentMethodCommand {
        userID: string;
        userType: ServerCommonUser.UserType;
        methodType: PaymentMethod | null;
        paymentMethodStatus?: PaymentMethodStatus | null;
        methodMaxAmount: string | null;
        methodMinAmount: string | null;
        payIcon: string;
        payName: string;
        paymentMethodList?: PaymentMethodInfo[] | null;
        remark?: string | null;
    }

    interface DeletePlatformPaymentMethodCommandPathParams {
        paymentMethodID: string;
    }

    interface DeletePlatformPaymentMethodCommandWithoutPath {
        userID: string;
        userType: ServerCommonUser.UserType;
    }

    interface DeleteShopCustomerPaymentMethodCommandPathParams {
        shopPaymentMethodID: string;
    }

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

    interface GetPlatformPaymentMethodCommandPathParams {
        paymentMethodID: string;
    }

    interface GetShopCustomerPaymentMethodCommandPathParams {
        shopPaymentMethodID: string;
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

    interface ListCustomerPaymentMethodCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListCustomerPaymentMethodCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        paymentMethodStatus?: PaymentMethodStatus | null;
        endTime?: number | null;
        shopCode: number;
    }

    interface ListCustomerPaymentMethodResult {
        list: ListCustomerPaymentMethodRow[] | null;
        total: number;
        query: ListCustomerPaymentMethodCommand;
    }

    interface ListCustomerPaymentMethodRow {
        shopPaymentMethodID: string;
        shopCode: number;
        shopName: string;
        payIcon: string;
        payName: string;
        createdAt: number;
        updatedAt: number;
        methodType: PaymentMethod;
        paymentMethodStatus: PaymentMethodStatus;
        methodMaxAmount: string;
        methodMinAmount: string;
        remark: string;
        paymentMethodList: PaymentMethodInfo[] | null;
    }

    interface ListPaymentRecordCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListPaymentRecordCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode?: string | null;
        userID?: string | null;
        userType?: ServerCommonUser.UserType | null;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListPaymentRecordResult {
        list: ShopRechargeRecord[] | null;
        total: number;
        query: ListPaymentRecordCommand;
    }

    interface ListPlatformPaymentMethodCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListPlatformPaymentMethodCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListPlatformPaymentMethodResult {
        list: PlatformPaymentMethod[] | null;
        total: number;
        query: ListPlatformPaymentMethodCommand;
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
        paymentMethod: PaymentMethod;
        transactionOrderNo: string;
    }

    interface PaymentMethodDetail {
        paymentMethodDetailID?: string;
        methodDesc: string;
        paymentReminderDto: PaymentReminder;
        hasActivatePay: number;
        methodId: string;
        openStartTime: string;
        openEndTime: string;
        shopMethodMaxAmount: string;
        shopMethodMinAmount: string;
        methodMaxAmount: string;
        methodMinAmount: string;
    }

    interface PaymentMethodInfo {
        paymentMethodInfoID?: string;
        channelName: string;
        hasOpenPay: number;
        remark?: string;
        methodType: PaymentMethod;
        displayShopDesc: string;
        applyParams: ApplyParam[] | null;
        applyReminds: ApplyRemind[] | null;
        hasSignContract: number;
        applyFlag: ApplyFlag;
        paymentMethodDetailDtoList: PaymentMethodDetail[] | null;
    }

    interface PaymentReminder {
        paymentBefore?: string;
        paymentAfter?: string;
        paymentQrcodeOne?: string;
        paymentQrcodeTwo?: string;
        paymentQrcodeThree?: string;
        displayShopDesc?: string;
    }

    interface PlatformPaymentMethod {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        methodType: PaymentMethod;
        paymentMethodStatus: PaymentMethodStatus;
        methodMaxAmount: string;
        methodMinAmount: string;
        payIcon: string;
        payName: string;
        paymentMethodList?: PaymentMethodInfo[] | null;
        remark: string;
        deleteAt: number;
    }

    interface PlusDeductCommandPathParams {
        userID: string;
    }

    interface PlusDeductCommandWithoutPath {
        amount: string;
        walletID: string;
        currency?: string;
        transactionType: TransactionType;
        remark?: string;
    }

    interface ShopCollectionMethod {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        shopCode: number;
        platformPaymentMethodID: string;
        shopName: string;
        paymentMethod: PaymentMethod;
        paymentMethodStatus: PaymentMethodStatus;
        deleteAt: number;
    }

    interface ShopCustomerRechargeCommand {
        shopCode: number;
        userID: string;
        userType: ServerCommonUser.UserType;
        walletID: string;
        paymentMethod: PaymentMethod;
        amount: string;
        paymentParam?: Record<string,any> | null;
    }

    interface ShopCustomerRechargeResult {
        result: string;
        methodName: string;
        methodUrl: string;
        payHtml: string;
        payInfo: any;
        queryUrl: any;
        payMsg: any;
        payFrom: any;
        orderNo: string;
    }

    interface ShopRechargeCommand {
        shopCode: number;
        userID: string;
        userType: ServerCommonUser.UserType;
        walletID: string;
        paymentMethod: PaymentMethod;
        amount: string;
        paymentParam?: Record<string,any> | null;
    }

    interface ShopRechargeRecord {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        shopkeeperID: string;
        userID: string;
        shopCode: number;
        shopName: string;
        amount: string;
        rechargeStatus: RechargeStatus;
        rechargeType: number;
        rechargeTime: any;
        remark: string;
        orderNo: string;
        username: string;
        userType: ServerCommonUser.UserType;
        paymentMethod: PaymentMethod;
    }

    interface ShopRechargeResult {
        result: string;
        methodName: string;
        methodUrl: string;
        payHtml: string;
        payInfo: any;
        queryUrl: any;
        payMsg: any;
        payFrom: any;
        orderNo: string;
    }

    interface UpdatePlatformPaymentMethodCommandPathParams {
        paymentMethodID: string;
    }

    interface UpdatePlatformPaymentMethodCommandWithoutPath {
        userID: string;
        userType: ServerCommonUser.UserType;
        paymentMethodInfo: PaymentMethodInfo;
        isRemovePaymentMethodInfo: boolean;
        methodType?: PaymentMethod | null;
        paymentMethodStatus?: PaymentMethodStatus | null;
        methodMaxAmount?: string | null;
        methodMinAmount?: string | null;
        payIcon?: string | null;
        payName?: string | null;
        remark?: string | null;
    }

    interface UpdateShopCustomerPaymentMethodCommandPathParams {
        shopPaymentMethodID: string;
    }

    interface UpdateShopCustomerPaymentMethodCommandWithoutPath {
        paymentMethod?: PaymentMethod | null;
        paymentMethodStatus?: PaymentMethodStatus | null;
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

    interface WithdrawalApplicationCommand {
        username: string;
        withdrawType: WithdrawType;
        shopCode: number;
        amount: string;
        userID: string;
        cardNo?: string;
        alipayAccount?: string;
        accountBank?: string;
        userType: ServerCommonUser.UserType;
        remark?: string;
        agentName: string;
        agentUsername: string;
        shopName: string;
        levelId: number;
        walletID: string;
    }

    interface WithdrawalApplicationResult {
        withdrawID: string;
    }

    // 1: 启用, 2: 禁用
    type ApplyFlag = 1 | 2;

    // frozen: 冻结, active: 启用, disabled: 禁用
    type LotteryUserWalletStatus = 'frozen' | 'active' | 'disabled';

    // manual: 手动, api: API调用, system: 系统操作, user: 用户操作
    type OperatorType = 'manual' | 'api' | 'system' | 'user';

    // 1: 钱包余额, 2: 支付宝, 3: 微信支付, 4: 快捷支付, 5: 二维码收款, 6: 银行卡充值, 7: 泰达币
    type PaymentMethod = 1 | 2 | 3 | 4 | 5 | 6 | 7;

    // 1: 启用, 3: 禁用, 2: 等待审批
    type PaymentMethodStatus = 1 | 3 | 2;

    // 1: 充值成功, 2: 充值中, 3: 充值失败
    type RechargeStatus = 1 | 2 | 3;

    // success: 交易成功, pending: 审核中, failed: 交易失败
    type TransactionStatus = 'success' | 'pending' | 'failed';

    // 充值: 充值, 提现: 提款(提现), 投注: 投注, 返奖: 返奖, 服务费: 服务费, 退款: 退款, 收入: 收入, 转账: 转账, 其他支出: 其他支出, 代购支付: 代购支付, 店主加款: 店主加款, 店主扣款: 店主扣款, 赠送加款: 赠送加款, 赠送扣款: 赠送扣款
    type TransactionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

    // 1: 已通过, 2: 等待审批, 3: 已驳回
    type WithdrawStatus = 1 | 2 | 3;

    // 1: 用户提现, 2: 合作提现
    type WithdrawType = 1 | 2;

}
