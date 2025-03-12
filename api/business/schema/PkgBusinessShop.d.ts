
declare namespace PkgBusinessShop {

    interface GetShopKeeperMesCommandQuery {
        shopCode: number;
        userID: string;
    }

    interface GetShopKeeperMesResult {
        imgUrl: string;
        shopName: string;
        shopCode: number;
        shopId: string;
        shopBalance: string;
        systemUserTotalBalance: string;
        userBalance: string;
        frozenAmount: string;
        returnOrderCount: number;
        withdrawOrderCount: number;
        payMethod: any;
        shopStatus: ServerCommonShop.ShopStatus;
        withdrawBalance: string;
        withdrawalType: any;
        isOperator: number;
        customerService: string;
        payBonusRatio: number;
        applyQuickPayName: string;
        applyQuickPayIcon: string;
        changeShopName: boolean;
    }

    interface GetUserDetailResult {
        userId: number;
        mobile: string;
        nickName: any;
        imgUrl: string;
        paymentMethods: any;
        shopId: number;
        shopName: string;
        ownerName: any;
        shopTelephone: any;
        shopWechat: string;
        shopAddress: string;
        shopNotice: string;
        shopNoticePic: string;
        inviteCode: string;
        shopType: number;
        autoLottery: string;
        showLottery: string;
        rechargeMinAmount: string;
        rechargeMaxAmount: string;
        withdrawMinAmount: string;
        withdrawMaxAmount: string;
        balance: number;
        withdrawBalance: number;
        shopInformationSwitch: number;
        networkOrderSwitch: number;
        withdrawMethod: any;
        certification: number;
        shopStatus: number;
        ticketRate: number;
        withdrawMaxCount: number;
        registerSwitch: number;
        orderTimeSwitch: number;
        orderSoundSwitch: any;
        recomShopId: number;
        withdrawalType: number;
        orderVoice: any;
        homePageSwitch: number;
        freePasswordSwitch: number;
        announceSwitch: boolean;
        showName: boolean;
        showPhone: boolean;
        showWechat: boolean;
        showAddress: boolean;
        autoTicket: number;
        autoReceiveMin: number;
        autoReceiveMax: number;
        autoTicketMin: number;
        autoTicketMax: number;
        rechargeBetSwitch: number;
    }

    interface ShopReviewResult {
        searchValue: string | null;
        createBy: string | null;
        createTime: any;
        updateBy: string | null;
        updateTime: any;
        remark: string | null;
        params: any;
        id: number;
        userId: number;
        mobile: string;
        headImg: string;
        shopName: string;
        shopAddress: string;
        lotteryType: number;
        consignmentCertificate1: string;
        consignmentCertificate2: string;
        doorProjection: string;
        idCardFront: string;
        idCardReverse: string;
        idCardHand: string;
        legalPersonDoorPhoto: string;
        consignmentCertificateHand2: string;
        consignmentCertificateHand1: string;
        status: number;
        shopId: number;
        ownerName: string | null;
        recomShopId: number | null;
        operateUserId: number | null;
        applyAmount: number;
        applyRechargeFlag: number;
        certificationVideo: string | null;
    }

}
