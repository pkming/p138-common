
declare namespace anonymous {

    interface Class0 {
        payIcon: string;
        payName: string;
        paymentMethodList: PaymentMethod[] | null;
    }

    interface Class2 {
        methodDesc: string;
        paymentReminderDto: Class3;
        hasActivatePay: number;
        methodId: number;
        openStartTime: string;
        openEndTime: string;
        shopMethodMaxAmount: string;
        shopMethodMinAmount: string;
        methodMaxAmount: string;
        methodMinAmount: string;
    }

    interface Class3 {
        paymentBefore: string;
        paymentAfter: string;
        paymentQrcodeOne: string;
        paymentQrcodeTwo: string;
        paymentQrcodeThree: string;
        displayShopDesc: string;
    }

    interface PaymentMethod {
        channelName: string;
        hasOpenPay: number;
        remark: any;
        methodType: number;
        displayShopDesc: string;
        applyParam: string;
        applyRemind: string | null;
        hasSignContract: number;
        applyFlag: number;
        paymentMethodDetailDtoList: Class2[] | null;
    }

}
