
import request from "../request";


// 获取投注数据或者中奖数据总金额
export function getProxyUnderUserOrderAmount(query: BusinessShopCustomer.GetProxyUnderUserOrderAmountCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCustomer.GetProxyUnderUserOrderAmountResult>>({ method: 'GET', url: '/api/v1/shop/customer/user-agent/order-amount', query })
}


// 获取代理下的用户余额
export function getTotalUserBalance(query: BusinessShopCustomer.GetProxyUnderTotalUserBalanceCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCustomer.GetProxyUnderTotalUserBalanceResult>>({ method: 'GET', url: '/api/v1/shop/customer/user-agent/total-user-balance', query })
}


// 获取被代理的用户列表(注册数据)
export function listProxyUnderUser(query: BusinessShopCustomer.ListProxyUnderUserCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCustomer.ListProxyUnderUserResult>>({ method: 'GET', url: '/api/v1/shop/customer/user-agent/proxy-under-user', query })
}


// 投注数据/中奖数据
export function listProxyUnderUserBetDataOrWinData(query: BusinessShopCustomer.ListProxyUnderUserBetDataOrWinDataCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCustomer.ListProxyUnderUserBetDataOrWinDataResult>>({ method: 'GET', url: '/api/v1/shop/customer/user-agent/bet-data-or-win-data', query })
}


// 获取店铺代理列表
export function listShopUsefulAgent(query: ServerCommonAuth.ListShopUsefulAgentCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.ListShopUsefulAgentResult>>({ method: 'GET', url: '/api/v1/shop/customer/user-agent/get-useful-agent-list', query })
}


// 代理转移(选择代理),用户默认代理人是店主,参数userID是被修改代理的那个人的ID
export function transferAgent(data: BusinessShopCustomer.TransferAgentCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: '/api/v1/shop/customer/user-agent/transfer', data })
}


// 修改佣金比例(修改代理佣金)
export function updateAgentCommission(data: BusinessShopCustomer.UpdateAgentCommissionCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: '/api/v1/shop/customer/user-agent/commission', data })
}


// 用户管理-用户代理
const shopCustomerUserAgentApi = {
    getProxyUnderUserOrderAmount, getTotalUserBalance, listProxyUnderUser, listProxyUnderUserBetDataOrWinData, listShopUsefulAgent, transferAgent, updateAgentCommission
}

export default shopCustomerUserAgentApi
