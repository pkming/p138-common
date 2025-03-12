
declare namespace ShopSettingCenter {

    interface Class3 {
        searchValue: any;
        createBy: string;
        createTime: string;
        updateBy: string;
        updateTime: string | null;
        remark: any;
        params: any;
        noticeId: number;
        noticeTitle: string;
        noticeType: string;
        displayType: number;
        displayNode: number;
        noticeContent: string;
        status: string;
        shopId: any;
    }

    interface GetFAQResult {
        total: number;
        pages: number;
        totalAmount: any;
        rows: Class3[] | null;
    }

    interface GetShopConfigDetailCommandQuery {
        shopCode: number;
        userID: string;
    }

    interface GetShopConfigDetailResult {
        userId: string;
        username: string;
        nickname: string;
        avatar: string;
        certification: number;
        paymentMethods: string[] | null;
        balance: string;
        withdrawBalance: string;
        orderSoundSwitch: number;
        orderVoice: string;
        homePageSwitch: number;
        shopInformationSwitch: number;
        networkOrderSwitch: number;
        shopImgUrl: string;
        shopkeeperId: string;
        recomShopCode: number;
        shopCode?: number;
        shopName: string;
        referralCode: string;
        shopkeeperName: string;
        shopIcon: string;
        shopTelephone: string;
        shopNoticePic: string;
        shopNoticeImage: string | null;
        lotteryTypes: string[] | null;
        shopType: ServerCommonShop.ShopType;
        staffCount?: number;
        dailyTicketSalesVolume?: number;
        dailySalesAmount?: number;
        commissionRate?: number;
        shopStatus: ServerCommonShop.ShopStatus;
        lastActiveTime: any;
        rechargeMinAmount?: string;
        rechargeMaxAmount?: string;
        withdrawMinAmount?: string;
        withdrawMaxAmount?: string;
        withdrawMaxCount?: number;
        paymentMethods: string[] | null;
        withdrawalType: ServerCommonShop.WithdrawalType;
        walletId: string;
        ticketRate?: number;
        registerSwitch?: boolean;
        rechargeBetSwitch: boolean;
        freePasswordSwitch: boolean;
        orderTimeSwitch: boolean;
        autoTicket: ServerCommonShop.AutoTicketType;
        autoTicketMin: number;
        autoTicketMax: number;
        autoReceiveMin: number;
        autoReceiveMax: number;
        autoLottery: boolean;
        showLottery: boolean;
        shopNotice: string | null;
        defaultShopNotice: string | null;
        announceSwitch: boolean;
        showShopkeeperName: boolean;
        shopPhone: string | null;
        showPhone: boolean;
        shopWechat: string | null;
        showWechat: boolean;
        showAddress: boolean;
        showNotice: boolean;
        province: string | null;
        city: string | null;
        district: string | null;
        shopDetailedAddress: string | null;
        headImg: string | null;
        consignmentCertificateSportsLottery: string;
        consignmentCertificateWelfareLottery: string;
        doorProjection: string;
        idCardFront: string;
        idCardReverse: string;
        idCardHand: string;
        legalPersonDoorPhoto: string;
        consignmentCertificateWelfareLotteryHand: string;
        consignmentCertificateSportsLotteryHand: string;
        certificationVideo: string;
        searchValue: string | null;
        balance: string | null;
        withdrawBalance: string | null;
    }

}
