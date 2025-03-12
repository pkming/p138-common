
declare namespace PkgBusinessChat {

    interface Chat {
        topic: number;
        isGroup: boolean;
        nickName: string;
        imgUrl: string;
        levelId: any;
        ringStatus: number;
        lastMsg: string;
        atName: any;
        atNameOwn: any;
        timestamp: number;
        unread: string;
        online: boolean;
        store: number;
        userId: any;
        sort: number;
        sticky: number;
    }

    interface ListChatApiCommandQuery {
        userID: string;
        shopCode: number;
    }

    interface ListChatApiCommandResult {
        list: Chat[] | null;
    }

}
