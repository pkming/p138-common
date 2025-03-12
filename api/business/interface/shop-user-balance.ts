
import request from "../request";


// 获取用户余额列表
export function getAllUserBalance(query: CommonTrusteeshipBalance.GetAllUserBalanceCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<CommonTrusteeshipBalance.GetAllUserBalanceResult>>({ method: 'GET', url: '/api/v1/shop/user-balance/all-user/balance', query })
}


// 获取冻结余额列表
export function getUserFrozenAmountDetail(query: CommonTrusteeshipBalance.GetUserFrozenAmountDetailCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<CommonTrusteeshipBalance.GetUserFrozenAmountDetailResult>>({ method: 'GET', url: '/api/v1/shop/user-balance/frozen-amount/detail', query })
}


// 获取订单列表
export function listOrder(query: CommonTrusteeshipBalance.ListFrozenAmountCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<CommonTrusteeshipBalance.ListFrozenAmountResult>>({ method: 'GET', url: '/api/v1/shop/user-balance/list-order', query })
}


// 托管余额
const shopUserBalanceApi = {
    getAllUserBalance, getUserFrozenAmountDetail, listOrder
}

export default shopUserBalanceApi
