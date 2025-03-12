
import request from "../request";


// 创建彩票商店(后台使用,B端不需要调用这个API)
export function createShopApi(data: ServerCommonShop.CreateShopCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonShop.CreateShopResult>>({ method: 'POST', url: '/api/v1/shop/shop', data })
}


// 注销店铺
export function deleteShopApi(pathParams: ServerCommonShop.DeleteShopCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/shop/shop/${pathParams.shopCode}` })
}


// 根据彩票商店编码获取商店信息(getShopMessage)
export function getByShopCodeApi(pathParams: ServerCommonShop.ShopCodePathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonShop.LotteryShop>>({ method: 'GET', url: `/api/v1/shop/shop/shopCode/${pathParams.shopCode}/getShopMessage` })
}


// 获取彩票商店列表
export function listShopApi(query: ServerCommonShop.ListShopCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonShop.PageData>>({ method: 'GET', url: '/api/v1/shop/shop', query })
}


// 店铺设置-店铺信息
export function settingShopBasicInfoApi(data: ServerCommonShop.SettingShopCommandWithoutPath, pathParams: ServerCommonShop.SettingShopCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/shop/${pathParams.shopCode}`, data })
}


// 店铺入驻
export function settledInShopApi(data: ServerCommonShop.SettledInShopCommandWithoutPath, pathParams: ServerCommonShop.SettledInShopCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: `/api/v1/shop/shop/${pathParams.shopCode}`, data })
}


// 彩票店铺
const shopShopApi = {
    createShopApi, deleteShopApi, getByShopCodeApi, listShopApi, settingShopBasicInfoApi, settledInShopApi
}

export default shopShopApi
