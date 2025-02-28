
declare namespace PkgCustomerBanner {

    interface Banner {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        createBy?: string;
        updateBy?: string;
        searchValue?: string;
        params?: string[] | null;
        bannerTitle: string;
        bannerContent?: string;
        redirectType?: number;
        imageUrl: string;
        redirectUrl?: string;
        position?: number;
        startTime: any;
        endTime: any;
        status: number;
        weight?: number;
        sort?: number;
        platform?: string;
        description?: string;
    }

    interface CreateBannerCommand {
        createBy?: string;
        updateBy?: string;
        searchValue?: string;
        params?: string[] | null;
        bannerTitle: string;
        bannerContent?: string;
        redirectType?: number;
        imageUrl: string;
        redirectUrl?: string;
        position?: number;
        startTime: any;
        endTime: any;
        status: number;
        weight?: number;
        sort?: number;
        platform?: string;
        description?: string;
    }

    interface CreatedBannerResult {
        bannerID: string;
    }

    interface PathIDPathParams {
        bannerID: string;
    }

    interface UpdateBannerCommandPathParams {
        bannerID: string;
    }

    interface UpdateBannerCommandWithoutPath {
        createBy?: string;
        updateBy?: string;
        searchValue?: string;
        params?: string[] | null;
        bannerTitle: string;
        bannerContent?: string;
        redirectType?: number;
        imageUrl: string;
        redirectUrl?: string;
        position?: number;
        startTime: any;
        endTime: any;
        status: number;
        weight?: number;
        sort?: number;
        platform?: string;
        description?: string;
    }

}
