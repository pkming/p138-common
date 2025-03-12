
import request from "../request";


// 获取店铺详细信息
export function getShopDetail() {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessShop.GetUserDetailResult>>({ method: 'GET', url: '/api/v1/shop/owner/detail' })
}


// 获取店铺配置信息
export function getShopReview() {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessShop.ShopReviewResult>>({ method: 'GET', url: '/api/v1/shop/system/shop_review/schedule' })
}


// 个人中心:提现管理,派奖管理,服务费钱包余额,托管余额
export function getShopkeeperMes(query: PkgBusinessShop.GetShopKeeperMesCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessShop.GetShopKeeperMesResult>>({ method: 'GET', url: '/api/v1/shop/system/shop/keeper/user/shopkeeper-mes', query })
}


// 获取用户基本信息(包括用户类型,用户ID,用户所属商店,用户钱包)
export function getUserInfo(pathParams: ServerCommonAuth.GetUserInfoCommandPathParams, header: ServerCommonAuth.GetUserInfoCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.GetUserInfoResult>>({ method: 'GET', url: `/api/v1/shop/user-info/${pathParams.userID}`, header })
}


// 店铺
const shopApi = {
    getShopDetail, getShopReview, getShopkeeperMes, getUserInfo
}

export default shopApi
