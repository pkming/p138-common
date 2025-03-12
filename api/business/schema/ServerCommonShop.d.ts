
declare namespace ServerCommonShop {

    interface CreateShopCommand {
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
        shopType: ShopType;
        staffCount?: number;
        dailyTicketSalesVolume?: number;
        dailySalesAmount?: number;
        commissionRate?: number;
        shopStatus: ShopStatus;
        lastActiveTime: any;
        rechargeMinAmount?: string;
        rechargeMaxAmount?: string;
        withdrawMinAmount?: string;
        withdrawMaxAmount?: string;
        withdrawMaxCount?: number;
        paymentMethods: string[] | null;
        withdrawalType: WithdrawalType;
        walletId: string;
        ticketRate?: number;
        registerSwitch?: boolean;
        rechargeBetSwitch: boolean;
        freePasswordSwitch: boolean;
        orderTimeSwitch: boolean;
        autoTicket: AutoTicketType;
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

    interface CreateShopResult {
        id: string;
        shopCode: number;
    }

    interface DeleteShopCommandPathParams {
        shopCode: string;
    }

    interface ListShopCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListShopCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        shopName?: string | null;
        shopCode?: number | null;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface LotteryShop {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
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
        shopType: ShopType;
        staffCount?: number;
        dailyTicketSalesVolume?: number;
        dailySalesAmount?: number;
        commissionRate?: number;
        shopStatus: ShopStatus;
        lastActiveTime: any;
        rechargeMinAmount?: string;
        rechargeMaxAmount?: string;
        withdrawMinAmount?: string;
        withdrawMaxAmount?: string;
        withdrawMaxCount?: number;
        paymentMethods: string[] | null;
        withdrawalType: WithdrawalType;
        walletId: string;
        ticketRate?: number;
        registerSwitch?: boolean;
        rechargeBetSwitch: boolean;
        freePasswordSwitch: boolean;
        orderTimeSwitch: boolean;
        autoTicket: AutoTicketType;
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

    interface PageData {
        list: LotteryShop[] | null;
        total: number;
        query: ListShopCommand;
    }

    interface SettingCenterShopCommandPathParams {
        shopCode: string;
    }

    interface SettingCenterShopCommandWithoutPath {
        registerSwitch: boolean;
        rechargeBetSwitch: boolean;
        freePasswordSwitch: boolean;
        orderTimeSwitch: boolean;
        autoTicket: AutoTicketType;
        autoTicketMin?: number | null;
        autoTicketMax?: number | null;
        autoReceiveMin?: number | null;
        autoReceiveMax?: number | null;
        autoLottery: boolean;
        showLottery: boolean;
    }

    interface SettingShopCommandPathParams {
        shopCode: number;
    }

    interface SettingShopCommandWithoutPath {
        shopNotice?: string | null;
        showNotice?: boolean;
        announceSwitch?: boolean;
        showShopkeeperName?: boolean;
        shopPhone?: string | null;
        showPhone?: boolean;
        shopWechat?: string | null;
        showWechat?: boolean;
        showAddress?: boolean;
        shopDetailedAddress?: string | null;
    }

    interface SettledInShopCommandPathParams {
        shopCode: number;
    }

    interface SettledInShopCommandWithoutPath {
        shopkeeperId: string;
        headImg?: string | null;
        consignmentCertificateWelfareLotteryHand: string;
        consignmentCertificateSportsLotteryHand: string;
        doorProjection: string;
        idCardFront: string;
        idCardReverse: string;
        idCardHand: string;
        legalPersonDoorPhoto: string;
        consignmentCertificateSportsLottery: string;
        consignmentCertificateWelfareLottery: string;
        certificationVideo: string;
        searchValue: string | null;
        shopImgUrl: string;
        shopName: string;
        shopkeeperName?: string;
        province: string;
        city: string;
        district: string;
        shopDetailedAddress: string;
        shopType?: ShopType | null;
    }

    interface ShopCodePathParams {
        shopCode: number;
    }

    // 1: 禁用自动接单, 2: 自动接单, 3: 自动接单并出票
    type AutoTicketType = 1 | 2 | 3;

    // 1: 未认证/未入驻, 2: 审核中, 3: 已认证, 4: 解除入驻
    type ShopStatus = 1 | 2 | 3 | 4;

    // 1: 福体彩双机店, 2: 体彩单机店, 3: 福彩单机店
    type ShopType = 1 | 2 | 3;


    type WithdrawalType = 1 | 2 | 3;

}
