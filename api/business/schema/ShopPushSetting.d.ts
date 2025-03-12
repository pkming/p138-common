
declare namespace ShopPushSetting {

    interface AddOrderVoiceCommand {
        key: string;
        value: string;
    }

    interface DeleteOrderVoiceCommandPathParams {
        orderVoiceID: string;
    }

    interface ListOrderVoiceCommand {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListOrderVoiceCommandQuery {
        current?: number;
        pageSize?: number;
        sort?: CommonCommonEnum.Sort;
        direction?: BasicTypes.Direction;
        startTime?: number | null;
        endTime?: number | null;
    }

    interface ListOrderVoiceResult {
        list: OrderVoice[] | null;
        total: number;
        query: ListOrderVoiceCommand;
    }

    interface OrderVoice {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        key: string;
        value: string;
        createBy: string;
        updateBy: string;
        orderVoiceStatus: OrderVoiceStatus;
    }

    interface SetOrderVoiceCommand {
        userID: string;
        userType: ServerCommonUser.UserType;
        key: string;
        value: string;
        orderSoundSwitch: ServerCommonUser.OrderSoundSwitch;
    }

    interface UpdateOrderVoiceCommandPathParams {
        orderVoiceID: string;
    }

    interface UpdateOrderVoiceCommandWithoutPath {
        key: string;
        value: string;
    }

    // 1: 启用, 2: 禁用
    type OrderVoiceStatus = 1 | 2;

}
