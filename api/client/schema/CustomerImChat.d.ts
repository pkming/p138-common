
declare namespace CustomerImChat {

    interface Chat {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        userID: string;
        chatID: string;
        chatType: ChatType;
        participants: string[] | null;
        lastMessageID: number | null;
        unreadCount: number;
        status: ChatStatus;
        lastMessage: string;
    }

    interface CreateChatCommand {
        userID: string;
        chatID: string;
        chatType: ChatType;
        participants: string[] | null;
        lastMessageID: number | null;
        unreadCount: number;
        status: ChatStatus;
        lastMessage: string;
    }

    interface CreatedChatResult {
        chatID: string;
    }

    interface PathIDPathParams {
        chatID: string;
    }

    interface UpdateChatCommandPathParams {
        chatID: string;
    }

    interface UpdateChatCommandWithoutPath {
        userID: number;
        chatID: string;
        chatType: ChatType;
        participants: string[] | null;
        lastMessageID: number | null;
        unreadCount: number;
        status: ChatStatus;
        lastMessage: string;
    }

    // active: 活跃, archived: 归档, deleted: 已删除
    type ChatStatus = 'active' | 'archived' | 'deleted';

    // private: 私人会话, group: 群组会话, customer_service: 客服会话
    type ChatType = 'private' | 'group' | 'customer_service';

}
