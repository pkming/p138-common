
declare namespace ServerCommonAuth {

    interface DecodeReferralUrlCommandQuery {
        params: string;
    }

    interface DecodeReferralUrlCommandResult {
        params: string;
    }

    interface GenerateCaptchaResult {
        sessionId: string;
        captcha: string;
    }

    interface GenerateReferralUrlCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface GenerateReferralUrlCommandPathParams {
        userID: string;
    }

    interface GetUserBasicInfoCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface GetUserBasicInfoCommandPathParams {
        userID: string;
    }

    interface GetUserInfoCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface GetUserInfoCommandPathParams {
        userID: string;
    }

    interface GetUserInfoResult {
        userID: string;
        username: string;
        realName: string;
        userType: ServerCommonUser.UserType;
        nickname: string;
        avatar: string;
        certification: ServerCommonUser.IdCertificationType;
        paymentMethods: string[] | null;
        balance: string;
        withdrawBalance: string;
        frozenBalance: string;
        referralCode: string;
        vipLevel: number;
        status: ServerCommonUser.Status;
        lockUntil: any;
        points: number;
        recommenderId: string;
        recommenderType: ServerCommonUser.UserType;
        recommenderCode: string;
        orderVoice: string;
        homePageSwitch: number;
        shopInformationSwitch: number;
        networkOrderSwitch: number;
        shopImgUrl: string;
        shopkeeperId: string;
        recomShopCode: number;
        shopCode?: number;
        shopName: string;
        shopReferralCode: string;
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
        userRole: ServerCommonUser.UserRole;
        rechargeMinAmount?: string;
        rechargeMaxAmount?: string;
        withdrawMinAmount?: string;
        withdrawMaxAmount?: string;
        withdrawMaxCount?: number;
        shopPaymentMethods: string[] | null;
        withdrawalType: ServerCommonShop.WithdrawalType;
        shopWalletId: string;
        ticketRate?: number;
        autoTicket: ServerCommonShop.AutoTicketType;
        autoTicketMin: number;
        autoTicketMax: number;
        autoReceiveMin: number;
        autoReceiveMax: number;
        shopNotice: string | null;
        shopPhone: string | null;
        shopWechat: string | null;
        province: string | null;
        city: string | null;
        district: string | null;
        shopDetailedAddress: string | null;
        headImg: string | null;
        searchValue: string | null;
        shopBalance: string | null;
        shopWithdrawBalance: string | null;
        recommenderUsername: string;
        referralUrl?: string;
        shareUrl?: string;
        shopKeeperShareUrl?: string;
        createdAt: number;
        isAgent: boolean;
        isStarUser: boolean;
        ancestors: string[] | null;
        agentLevel: number | null;
        parentAgentUserId: string | null;
        parentAgentUserType: ServerCommonUser.UserType | null;
        parentAgentReferralCode: string | null;
        parentAgentUsername: string | null;
        parentAgentCommissionRatio: number | null;
        remark: string | null;
    }

    interface GetUserTokenCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface GetUserTokenCommandPathParams {
        userID: string;
    }

    interface ListReferralInfoCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListReferralInfoCommandHeader {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface ListReferralInfoCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        referralCode?: string;
    }

    interface ListReferralInfoResult {
        list: ListReferralInfoRow[] | null;
        total: number;
        query: ListReferralInfoCommand;
        totalAmount?: string;
    }

    interface ListReferralInfoRow {
        status: ServerCommonUser.Status;
        shopCode: number;
        shopName: string;
        ticketAmount: string;
        ticketAmountStr: string;
        ticketCommission: number;
        createdAt: number;
        avatar: string;
        shopStatus: ServerCommonShop.ShopStatus;
        username: string;
    }

    interface ListUserByCursorCommandHeader {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface ListUserByCursorCommandQuery {
        limit: number;
        startCursor?: string | null;
        limit?: number;
        cursor?: any;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListUserCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListUserCommandHeader {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface ListUserCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface LoginPasswordCommand {
        oldLoginPassword?: string;
        newLoginPassword?: string;
    }

    interface LogoutCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface LogoutCommandPathParams {
        userID: string;
    }

    interface PageData {
        list: User[] | null;
        total: number;
        query: ListUserCommand;
    }

    interface RefreshTokenCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
        'X-Request-Id': string;
        'X-RandomStr': string;
        'X-Timestamp': string;
        'X-Sign': string;
    }

    interface RefreshTokenCommandPathParams {
        userID: string;
    }

    interface UpdateBasicInfoCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface UpdateBasicInfoCommandPathParams {
        userID: string;
    }

    interface UpdateBasicInfoCommandWithoutPath {
        nickname?: string;
        email?: string;
        phoneNumber?: string;
        idCardNumber?: string;
        realName?: string;
        avatar?: string;
        status?: ServerCommonUser.Status;
    }

    interface UpdateBasicInfoResult {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        username: string;
        referralCode: string;
        nickname: string;
        phoneNumber: string;
        idCardNumber: string;
        certification: ServerCommonUser.IdCertificationType;
        userType: ServerCommonUser.UserType;
        realName: string;
        remark: string | null;
        email: string;
        avatar: string;
        avatarURL: string;
        roles?: string[] | null;
        status: ServerCommonUser.Status;
        lockUntil: any;
        points: number;
        recommenderId: string;
        recommenderType: ServerCommonUser.UserType;
        recommenderCode: string;
        recommenderUsername: string | null;
        isAgent: boolean;
        isStarUser: boolean;
        isOrderUser: boolean | null;
        ancestors: string[] | null;
        agentLevel: number | null;
        parentAgentUserId: string | null;
        parentAgentUserType: ServerCommonUser.UserType | null;
        parentAgentReferralCode: string | null;
        parentAgentUsername: string | null;
        parentAgentCommissionRatio: number | null;
        shopId: string;
        shopCode: number;
        userRole: ServerCommonUser.UserRole | null;
        onlineStatus: number;
        proxyTime: number | null;
        proxyStatus: boolean;
        vipLevel: number;
        deviceSource: string | null;
        registryDeviceSystem: number;
        publicKeyPemDecryptKey: string;
        publicKeyPemDecryptIV: string;
    }

    interface User {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        username: string;
        referralCode: string;
        nickname: string;
        phoneNumber: string;
        idCardNumber: string;
        certification: ServerCommonUser.IdCertificationType;
        userType: ServerCommonUser.UserType;
        realName: string;
        remark: string | null;
        email: string;
        avatar: string;
        avatarURL: string;
        roles?: string[] | null;
        status: ServerCommonUser.Status;
        lockUntil: any;
        points: number;
        recommenderId: string;
        recommenderType: ServerCommonUser.UserType;
        recommenderCode: string;
        recommenderUsername: string | null;
        isAgent: boolean;
        isStarUser: boolean;
        isOrderUser: boolean | null;
        ancestors: string[] | null;
        agentLevel: number | null;
        parentAgentUserId: string | null;
        parentAgentUserType: ServerCommonUser.UserType | null;
        parentAgentReferralCode: string | null;
        parentAgentUsername: string | null;
        parentAgentCommissionRatio: number | null;
        shopId: string;
        shopCode: number;
        userRole: ServerCommonUser.UserRole | null;
        onlineStatus: number;
        proxyTime: number | null;
        proxyStatus: boolean;
        vipLevel: number;
        deviceSource: string | null;
        registryDeviceSystem: number;
        publicKeyPemDecryptKey: string;
        publicKeyPemDecryptIV: string;
    }

    interface UserResetPasswordCommand {
        userID?: string;
        isReset?: boolean;
        loginPasswordInfo?: LoginPasswordCommand;
        paymentPassword?: string;
    }

    interface UserResetPasswordCommandHeader {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface UserSignInCommand {
        username: string;
        password: string;
        userType: ServerCommonUser.UserType;
        actionType: ServerCommonUser.ActionType;
        referralParam?: string;
        captcha?: string;
        sessionId?: string;
        email?: string;
        phoneNumber?: string;
        referralCode?: string;
        shopId?: string;
        shopCode?: number;
    }

    interface UserSignInResult {
        userID: string;
        username: string;
        phoneNumber: string;
        userType: ServerCommonUser.UserType;
        referralUrl?: string;
        shopId?: string;
        shopCode?: number;
        referralCode?: string;
        token: string | null;
        balance: string;
        walletID?: string;
        imgUrl: string;
        realName?: string | null;
        cardNo?: string | null;
        accountBank?: string | null;
        accountPlace?: string | null;
        alipayAccount?: string | null;
        lastLoginShopId?: string;
        winningAmount?: string;
        withdrawBalance?: number;
        minWithdrawBalance?: number;
        maxWithdrawBalance?: number;
        recommenderId?: string;
        proxyShare?: string;
        fansNum?: number;
        followNum?: number;
        copyWinPrize?: string;
        copyRedNum?: number;
        togetherWinPrize?: string;
        togetherMaxWinPrize?: string;
        togetherRedNum?: number;
        staff?: number;
        shareUrl?: string;
        imUrl?: string;
        shopKeeperShareUrl?: string;
        shopCooperationUrl?: string;
        starMark?: number;
        deviceSource?: string;
        recommenderUsername?: string;
        createTime?: string;
        proxyStatus?: string;
        recommenderImg?: string;
        recommenderRegisterTime: string;
        remark?: string | null;
        orderVoice?: string;
        orderSoundSwitch?: number;
        platformCustomer?: string;
        parentUniImId?: string;
        isOperator?: number;
        withdrawMaxCount?: number;
        weChatAuthorizePath?: string;
        wxAppid?: string;
        wxPubAccount?: string;
        levelId?: number;
        score?: number;
        upScore?: number;
        lastLoginIp?: string | null;
        deviceId?: string | null;
        lastLoginArea?: string | null;
        lastLoginTime?: string | null;
        yebFlag?: number;
        yebBalance?: number;
        withdrawalType?: number;
        publicKeyPemDecryptKey?: string;
        publicKeyPemDecryptIV?: string;
        userRole?: ServerCommonUser.UserRole;
    }

    interface UserSignOutCommandHeaderWithoutPath {
        Authorization?: string;
        'User-Agent'?: string;
        'Accept-Language'?: string;
        'X-Locale'?: BasicTypes.Locale;
        'X-Timestamp'?: number;
        'X-Request-Id'?: string;
        'X-Device-Id'?: string;
        'X-Real-IP'?: string;
        'X-IP-Country'?: string;
        'X-IP-Region'?: string;
        'X-IP-City'?: string;
        'X-Sign'?: string;
        'X-Client-Type'?: string;
        'X-Platform'?: string;
        'X-Version'?: string;
        'X-Ca-Key'?: string;
        'X-Ca-timestamp'?: string;
        'X-Ca-nonce'?: string;
        'X-Shop-Code': number;
        'X-Is-Operator'?: string;
        'X-User-Type': ServerCommonUser.UserType;
        'X-Username': string;
        'X-Shop-Name'?: string;
    }

    interface UserSignOutCommandPathParams {
        userID: string;
    }

    interface UserSignOutCommandWithoutPath {
        email?: string;
    }

    interface UserSignOutResult {
        signOutSuccess: string;
    }

    interface UserUploadAvatarCommandPathParams {
        userID: string;
    }

    interface UserUploadAvatarCommandWithoutPath {
        avatar?: string;
    }

    interface UserUploadAvatarResult {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        username: string;
        referralCode: string;
        nickname: string;
        phoneNumber: string;
        idCardNumber: string;
        certification: ServerCommonUser.IdCertificationType;
        userType: ServerCommonUser.UserType;
        realName: string;
        remark: string | null;
        email: string;
        avatar: string;
        avatarURL: string;
        roles?: string[] | null;
        status: ServerCommonUser.Status;
        lockUntil: any;
        points: number;
        recommenderId: string;
        recommenderType: ServerCommonUser.UserType;
        recommenderCode: string;
        recommenderUsername: string | null;
        isAgent: boolean;
        isStarUser: boolean;
        isOrderUser: boolean | null;
        ancestors: string[] | null;
        agentLevel: number | null;
        parentAgentUserId: string | null;
        parentAgentUserType: ServerCommonUser.UserType | null;
        parentAgentReferralCode: string | null;
        parentAgentUsername: string | null;
        parentAgentCommissionRatio: number | null;
        shopId: string;
        shopCode: number;
        userRole: ServerCommonUser.UserRole | null;
        onlineStatus: number;
        proxyTime: number | null;
        proxyStatus: boolean;
        vipLevel: number;
        deviceSource: string | null;
        registryDeviceSystem: number;
        publicKeyPemDecryptKey: string;
        publicKeyPemDecryptIV: string;
    }

}
