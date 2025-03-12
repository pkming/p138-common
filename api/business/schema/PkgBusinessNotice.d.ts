
declare namespace PkgBusinessNotice {

    interface CreateNoticeCommand {
        createBy: string;
        updateBy: string;
        remark?: string;
        params?: string;
        noticeTitle: string;
        noticeType: NoticeType;
        displayType: NoticeDisplayType;
        displayNode: NoticeDisplayNode;
        noticeContent: string;
        status: NoticeStatus;
        shopCode?: number;
    }

    interface CreateNoticeResult {
        noticeID: string;
    }

    interface DeleteNoticeCommandPathParams {
        noticeID: string;
    }

    interface DeleteNoticeResult {
        noticeID: string;
    }

    interface GetPopUpNotificationCommandQuery {
        shopCode?: number | null;
    }

    interface ListAppMarqueeNoticeCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
    }

    interface ListAppMarqueeNoticeCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        noticeType?: NoticeType | null;
        shopCode?: number | null;
    }

    interface ListAppMarqueeNoticeResult {
        list: Notification[] | null;
        total: number;
        query: ListAppMarqueeNoticeCommand;
    }

    interface Notification {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        searchValue: string;
        createBy: string;
        updateBy: string;
        remark: string;
        params: string;
        noticeTitle: string;
        noticeType: NoticeType;
        displayType: NoticeDisplayType;
        displayNode: NoticeDisplayNode;
        noticeContent: string;
        status: NoticeStatus;
        shopCode: number;
    }

    interface UpdateNoticeCommandPathParams {
        noticeID: string;
    }

    interface UpdateNoticeCommandWithoutPath {
        remark?: string;
        params?: string;
        noticeTitle?: string;
        noticeType?: NoticeType;
        displayType?: NoticeDisplayType;
        displayNode?: NoticeDisplayNode;
        noticeContent?: string;
        status?: NoticeStatus;
        shopCode?: number;
    }

    interface UpdateNoticeResult {
        noticeID: string;
    }

    // 1: 显示节点
    type NoticeDisplayNode = 1;

    // 1: 弹窗通知, 2: 跑马灯通知
    type NoticeDisplayType = 1 | 2;

    // 1: 开启, 2: 关闭
    type NoticeStatus = 1 | 2;

    // 1: 弹窗通知, 2: 跑马灯通知
    type NoticeType = 1 | 2;

}
