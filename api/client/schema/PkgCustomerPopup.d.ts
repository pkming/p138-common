
declare namespace PkgCustomerPopup {

    interface CreateCommand {
        name: string;
        displayName: string;
        policies: Resource[] | null;
        enabled: boolean;
    }

    interface CreatedResult {
        id: string;
    }

    interface PathIDPathParams {
        id: string;
    }

    interface PopupNotification {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        title: string;
        'content_type': string;
        content?: string;
        'image_url'?: string;
        'popup_type': string;
        'trigger_condition': string;
        'trigger_value'?: string;
        'start_time': any;
        'end_time'?: any;
        'display_frequency': number;
        status: string;
        'created_at': any;
        'updated_at': any;
    }

    interface Resource {
        identifier: string;
        description?: string;
        children?: Resource[] | null;
    }

    interface UpdateCommandPathParams {
        id: string;
    }

    interface UpdateCommandWithoutPath {
        name?: string;
        displayName?: string;
        policies?: Resource[] | null;
        enabled?: boolean | null;
    }

}
