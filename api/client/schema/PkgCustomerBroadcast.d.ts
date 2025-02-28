
declare namespace PkgCustomerBroadcast {

    interface Broadcast {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        title: string;
        content: string;
        type: BroadcastType;
        priority: number;
        startTime: any;
        endTime: any;
        status: BroadcastStatus;
        platforms: string[] | null;
        userGroups: string[] | null;
        regions: string[] | null;
        frequency: number;
        showTimes: number;
        deletedAt?: any;
        description?: string;
    }

    interface CreateBroadcastCommand {
        title: string;
        content: string;
        type: BroadcastType;
        priority: number;
        startTime: any;
        endTime: any;
        status: BroadcastStatus;
        platforms: string[] | null;
        userGroups: string[] | null;
        regions: string[] | null;
        frequency: number;
        showTimes: number;
        description?: string;
        deletedAt?: any;
    }

    interface CreatedBroadcastResult {
        broadcastID: string;
    }

    interface PathIDPathParams {
        broadcastID: string;
    }

    interface UpdateBroadcastCommandPathParams {
        broadcastID: string;
    }

    interface UpdateBroadcastCommandWithoutPath {
        title: string;
        content: string;
        type: BroadcastType;
        priority: number;
        startTime: any;
        endTime: any;
        status: BroadcastStatus;
        platforms: string[] | null;
        userGroups: string[] | null;
        regions: string[] | null;
        frequency: number;
        showTimes: number;
        description?: string;
        deletedAt?: any;
    }

    // draft: 草稿, pending: 待发布, active: 已发布, inactive: 已下线, cancelled: 已取消
    type BroadcastStatus = 'draft' | 'pending' | 'active' | 'inactive' | 'cancelled';

    // system: 系统公告, activity: 活动公告, notice: 通知公告, alert: 警告公告
    type BroadcastType = 'system' | 'activity' | 'notice' | 'alert';

}
