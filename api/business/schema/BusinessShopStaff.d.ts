
declare namespace BusinessShopStaff {

    interface GetStaffAndPermissionsCommandPathParams {
        staffID: string;
    }

    interface GetStaffAndPermissionsCommandQueryWithoutPath {
        shopCode: number;
    }

    interface GetStaffAndPermissionsResult {
        staffID: string;
        shopStaffPermissionID: string;
        staffName: string;
        avatar: string;
        username: string;
        orderSwitch: number;
        payAccountSwitch: number;
        mobileSwitch: number;
        shopOrderSwitch: number;
        plusDeductionSwitch: number;
        orderBalanceSwitch: number;
        sendPrizesSwitch: number;
        staffLotteryConfigs: StaffLotteryConfig[] | null;
        staffLotteryConfigsMap: Record<string,BusinessShopStaff.StaffLotteryConfig> | null;
        shopCode: number;
        levelId: number;
    }

    interface ListStaffAndPermissionsCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListStaffAndPermissionsCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode: number;
    }

    interface ListStaffAndPermissionsResult {
        list: StaffPermissionRow[] | null;
        total: number;
        query: ListStaffAndPermissionsCommand;
    }

    interface SetStaffLotteryPermissionCommandPathParams {
        staffID: string;
    }

    interface SetStaffLotteryPermissionCommandWithoutPath {
        shopCode: number;
        shopStaffPermissionID: string;
        shopLotteryID: string;
        lotteryTypeID: string;
        lotterySwitch: ShopStaffPermissions.SwitchStatus;
        minAmount: string | null;
        maxAmount: string | null;
    }

    interface StaffLotteryConfig {
        shopLotteryID: string;
        lotteryTypeID: string;
        lotterySwitch: ShopStaffPermissions.SwitchStatus;
        lotteryName: CommonCommonEnum.LotteryName;
        lotteryChineseName: CommonCommonEnum.LotteryChineseName;
        lotteryIcon: string;
        minAmount: string | null;
        maxAmount: string | null;
    }

    interface StaffPermissionRow {
        staffID: string;
        shopStaffPermissionID: string;
        staffName: string;
        avatar: string;
        username: string;
        orderSwitch: number;
        payAccountSwitch: number;
        mobileSwitch: number;
        shopOrderSwitch: number;
        plusDeductionSwitch: number;
        orderBalanceSwitch: number;
        sendPrizesSwitch: number;
        staffLotteryConfigs: StaffLotteryConfig[] | null;
        staffLotteryConfigsMap: Record<string,BusinessShopStaff.StaffLotteryConfig> | null;
        shopCode: number;
        levelId: number;
    }

    interface UpdateStaffAndPermissionsCommandPathParams {
        shopStaffPermissionID: string;
    }

    interface UpdateStaffAndPermissionsCommandWithoutPath {
        staffID: string;
        orderSwitch?: ShopStaffPermissions.SwitchStatus | null;
        payAccountSwitch?: ShopStaffPermissions.SwitchStatus | null;
        mobileSwitch?: ShopStaffPermissions.SwitchStatus | null;
        shopOrderSwitch?: ShopStaffPermissions.SwitchStatus | null;
        plusDeductionSwitch?: ShopStaffPermissions.SwitchStatus | null;
        orderBalanceSwitch?: ShopStaffPermissions.SwitchStatus | null;
        sendPrizesSwitch?: ShopStaffPermissions.SwitchStatus | null;
    }

}
