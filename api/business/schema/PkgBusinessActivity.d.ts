
declare namespace PkgBusinessActivity {

    interface Activity {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        operatorID: string;
        operator: string;
        actKey: string;
        actTitle: string;
        actPoster: string;
        actSwitch: boolean;
        banner: string;
        jumpRoute: string;
        jumpType: string;
        actStartTime: string;
        actEndTime: string;
        content: string | null;
    }

    interface ActivityEvent {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        actSwitch: boolean;
        eventKey: EventKey;
        activityEventStatus: ActivityEventStatus;
        totalAmount: string;
        bonus: string;
        beginDate: string;
        endDate: string;
        days: number;
        lowestAmount: string;
        firstRecharge: FirstRecharge[] | null;
        shopCode: number;
    }

    interface CreatePlatformActivityConfigCommand {
        operatorID: string;
        operator: string;
        actKey: string;
        actTitle: string;
        actPoster: string;
        actSwitch: boolean;
        banner: string;
        jumpRoute: string;
        jumpType: string;
        actStartTime: string;
    }

    interface DeletePlatformActivityConfigCommandPathParams {
        activityID: string;
    }

    interface EnableEventConfigCommand {
        shopCode: number;
        eventKey: EventKey;
        activityEventStatus: ActivityEventStatus;
        totalAmount: string;
        bonus: string;
        beginDate: string;
        endDate: string;
        days: number;
    }

    interface FirstRecharge {
        rechargeAmount: number;
        giftAmount: number;
    }

    interface GetActivityConfigCommandPathParams {
        activityID: string;
    }

    interface GetEventConfigCommandPathParams {
        activityEventID: string;
    }

    interface ListActivityConfigCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListActivityConfigCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        activityStatus?: ActivityStatus | null;
    }

    interface ListActivityConfigResult {
        list: Activity[] | null;
        total: number;
        query: ListActivityConfigCommand;
    }

    interface ListEventConfigCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListEventConfigCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
        shopCode?: number | null;
        activityEventStatus?: ActivityEventStatus | null;
    }

    interface ListEventConfigResult {
        list: ActivityEvent[] | null;
        total: number;
        query: ListEventConfigCommand;
    }

    interface UpdateEventConfigCommandPathParams {
        activityEventID: string;
    }

    interface UpdatePlatformActivityConfigCommandPathParams {
        activityID: string;
    }

    interface UpdatePlatformActivityConfigCommandWithoutPath {
        operatorID: string;
        operator: string;
        actKey: string;
        actTitle: string;
        actPoster: string;
        actSwitch: boolean;
        banner: string;
        jumpRoute: string;
        jumpType: string;
        actStartTime: string;
    }

    // 1: 开启, 2: 关闭
    type ActivityEventStatus = 1 | 2;

    // 1: 开启, 2: 关闭
    type ActivityStatus = 1 | 2;

    // registryGift: 注册赠送, allpeopleGift: 全民推广, rechargeGift: 充值赠送, firstRecharge: 首充赠送
    type EventKey = 'registryGift' | 'allpeopleGift' | 'rechargeGift' | 'firstRecharge';

}
