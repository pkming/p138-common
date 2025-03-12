
import request from "../request";


// 添加合作申请
export function addCooperationApplication() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'POST', url: '/api/v1/shop/cooperation' })
}


// 合作账本
export function getCooperationLedger() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/ledger' })
}


// 合作店铺详情
export function getShopDetail() {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCooperation.GetShopDetailResult>>({ method: 'GET', url: '/api/v1/shop/cooperation/shop/detail' })
}


// 合作店铺
export function listCooperationShop() {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCooperation.ListCooperationShopResult>>({ method: 'GET', url: '/api/v1/shop/cooperation' })
}


// 搜索店铺
export function searchShop(query: BusinessShopCooperation.SearchShopCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCooperation.SearchShopResult>>({ method: 'GET', url: '/api/v1/shop/cooperation/search/shop', query })
}


// 合作申请记录
export function shopCooperationApplicationRecord() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/cooperation/application/record' })
}


// 消息提醒
export function shopCooperationMessageRemind() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/message/remind' })
}


// 合作店铺充值
export function shopCooperationRecharge() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/cooperation/recharge' })
}


// 合作店铺交易记录
export function shopCooperationTransactionRecord() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/balance-record' })
}


// 合作店铺提现
export function shopCooperationWithdraw() {
    return request<BasicTypes.DefaultResponseWrapper<undefined>>({ method: 'GET', url: '/api/v1/shop/cooperation/cooperation/withdraw' })
}


// 获取统计信息
export function shopStatistics() {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCooperation.ShopStatisticsResult>>({ method: 'GET', url: '/api/v1/shop/cooperation/statistics' })
}


// 合作店铺
const shopCooperationApi = {
    addCooperationApplication, getCooperationLedger, getShopDetail, listCooperationShop, searchShop, shopCooperationApplicationRecord, shopCooperationMessageRemind, shopCooperationRecharge, shopCooperationTransactionRecord, shopCooperationWithdraw, shopStatistics
}

export default shopCooperationApi
