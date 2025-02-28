
import request from "../request";


// 新增横幅
export function createBannerApi(data: PkgCustomerBanner.CreateBannerCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBanner.CreatedBannerResult>>({ method: 'POST', url: '/api/v1/banner', data })
}


// 刪除横幅
export function deleteBannerApi(pathParams: PkgCustomerBanner.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/banner/${pathParams.bannerID}` })
}


// 根据横幅ID获取弹窗
export function getBannerApi(pathParams: PkgCustomerBanner.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBanner.Banner>>({ method: 'GET', url: `/api/v1/banner/get/${pathParams.bannerID}` })
}


// 获取横幅列表
export function listBannerApi() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBanner.Banner[] | null>>({ method: 'GET', url: '/api/v1/banner/list' })
}


// 修改横幅
export function updateBannerApi(data: PkgCustomerBanner.UpdateBannerCommandWithoutPath, pathParams: PkgCustomerBanner.UpdateBannerCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/banner/${pathParams.bannerID}`, data })
}


// 横幅
const bannerApi = {
    createBannerApi, deleteBannerApi, getBannerApi, listBannerApi, updateBannerApi
}

export default bannerApi
