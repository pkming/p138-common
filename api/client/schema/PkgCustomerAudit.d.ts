
declare namespace PkgCustomerAudit {

    interface CreateUserAuditCommand {
        userID: string;
        action: string;
        details: string;
        status: string;
    }

    interface CreatedUserAuditResult {
        id: string;
    }

    interface PathIDPathParams {
        userID: string;
    }

    interface UserAudit {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        userID: string;
        action: string;
        timestamp: any;
        details: string;
        status: string;
    }

}
