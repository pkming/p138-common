
declare namespace BusinessShopWithdraw {

    interface ApprovalUserWithdrawCommand {
        withdrawID: string;
        approverID: string;
    }

    interface ListUserWithdrawCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface ListUserWithdrawCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopCode: number;
        shopkeeperName?: string | null;
        withdrawType?: ServerCommonWallet.WithdrawType | null;
    }

    interface ListUserWithdrawResult {
        list: WithdrawApplication[] | null;
        total: number;
        query: ListUserWithdrawCommand;
    }

    interface PatchWalletLimitCommand {
        shopkeeperName: string;
        withdrawType: ServerCommonWallet.WithdrawType;
        withdrawMinAmount: string;
        rechargeMinAmount: string;
        withdrawMaxCount: number;
        shopCode: number;
    }

    interface WithdrawApplication {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        username: string;
        withdrawType: ServerCommonWallet.WithdrawType;
        shopCode: number;
        amount: string;
        userID: string;
        nickname: string;
        avatar: string;
        realName: string;
        cardNo: string;
        alipayAccount: string;
        accountBank: string;
        userType: ServerCommonUser.UserType;
        withdrawStatus: ServerCommonWallet.WithdrawStatus;
        remark: string;
        agentName: string;
        agentUsername: string;
        shopName: string;
        levelId: number;
        walletID: string;
        approver: string;
    }

    interface WithdrawLimitQueryCommandQuery {
        shopCode: number | null;
        shopkeeperName?: string | null;
        withdrawType?: ServerCommonWallet.WithdrawType | null;
    }

    interface WithdrawLimitQueryResult {
        withdrawType: ServerCommonWallet.WithdrawType;
        withdrawMinAmount: string;
        rechargeMinAmount: string;
        withdrawMaxCount: number;
        shopCode: number;
    }

}
