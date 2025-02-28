
declare namespace PkgCustomerMembership {

    interface CreateMembershipLevelCommand {
        benefits?: string;
        levelCode: string;
        levelIcon: string;
        levelName: string;
        levelColor: string;
        levelOrder: number;
        minPoints: number;
        maxPoints: number;
        discountRate: number;
        dailyMaxBetAmount: string;
        dailyMaxWinningAmount: string;
        upgradeConditions: number[] | null;
        status: number;
    }

    interface CreatedMembershipLevelResult {
        vipID: string;
    }

    interface MembershipLevel {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        benefits?: string;
        levelCode: string;
        levelIcon: string;
        levelName: string;
        levelColor: string;
        levelOrder: number;
        minPoints: number;
        maxPoints: number;
        discountRate: number;
        dailyMaxBetAmount: string;
        dailyMaxWinningAmount: string;
        upgradeConditions: number[] | null;
        status: number;
    }

    interface PathIDPathParams {
        vipID: string;
    }

    interface UpdateMembershipLevelCommandPathParams {
        vipID: string;
    }

    interface UpdateMembershipLevelCommandWithoutPath {
        benefits?: string;
        levelCode: string;
        levelIcon: string;
        levelName: string;
        levelColor: string;
        levelOrder: number;
        minPoints: number;
        maxPoints: number;
        discountRate: number;
        dailyMaxBetAmount: string;
        dailyMaxWinningAmount: string;
        upgradeConditions: number[] | null;
        status: number;
    }

}
