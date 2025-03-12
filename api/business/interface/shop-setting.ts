
import request from "../request";


// 常见问题解答
export function getFaq() {
    return request<BasicTypes.DefaultResponseWrapper<ShopSettingCenter.GetFAQResult>>({ method: 'GET', url: '/api/v1/shop/setting/faq' })
}


// 获取设置中心详细信息(进入用户详情也需要用到)
export function getShopConfigDetail(query: ShopSettingCenter.GetShopConfigDetailCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ShopSettingCenter.GetShopConfigDetailResult>>({ method: 'GET', url: '/api/v1/shop/setting', query })
}


// 设置中心
export function settingCenterShopApi(data: ServerCommonShop.SettingCenterShopCommandWithoutPath, pathParams: ServerCommonShop.SettingCenterShopCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/setting/${pathParams.shopCode}`, data })
}


// 设置中心
const shopSettingApi = {
    getFaq, getShopConfigDetail, settingCenterShopApi
}

export default shopSettingApi
