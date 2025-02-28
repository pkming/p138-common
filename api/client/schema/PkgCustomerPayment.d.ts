
declare namespace PkgCustomerPayment {

    interface CreateCommand {
        channelCode: string;
        channelName: string;
        channelType: string;
        isAlipaySupported: boolean;
        isWechatPaySupported: boolean;
        isQuickPaymentSupported: boolean;
        isQrCodePaymentSupported: boolean;
        isBankCardRechargeSupported: boolean;
        supportedBanks: string[] | null;
        minRechargeAmount: number;
        maxRechargeAmount: number;
        rechargeFeeRate: number;
        dailyRechargeLimit: number | null;
        isActive: boolean;
        isVisible: boolean;
    }

    interface CreatedResult {
        id: string;
    }

    interface LotteryPaymentChannel {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        channelCode: string;
        channelName: string;
        channelType: string;
        isAlipaySupported: boolean;
        isWechatPaySupported: boolean;
        isQuickPaymentSupported: boolean;
        isQrCodePaymentSupported: boolean;
        isBankCardRechargeSupported: boolean;
        supportedBanks: string[] | null;
        minRechargeAmount: number;
        maxRechargeAmount: number;
        rechargeFeeRate: number;
        dailyRechargeLimit: number | null;
        isActive: boolean;
        isVisible: boolean;
    }

    interface PathIDPathParams {
        paymentID: string;
    }

    interface UpdateCommandPathParams {
        paymentID: string;
    }

    interface UpdateCommandWithoutPath {
        channelCode: string;
        channelName: string;
        channelType: string;
        isAlipaySupported: boolean;
        isWechatPaySupported: boolean;
        isQuickPaymentSupported: boolean;
        isQrCodePaymentSupported: boolean;
        isBankCardRechargeSupported: boolean;
        supportedBanks: string[] | null;
        minRechargeAmount: number;
        maxRechargeAmount: number;
        rechargeFeeRate: number;
        dailyRechargeLimit: number | null;
        isActive: boolean;
        isVisible: boolean;
    }

}
