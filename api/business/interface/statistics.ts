
import request from "../request";


// 派奖总金额
export function getBonusStatisticsInfo() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetBonusStatisticsInfoResult>>({ method: 'GET', url: '/api/v1/statistics/bonus' })
}


// 合作收入
export function getCooperationIncome() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetCooperationIncomeResult>>({ method: 'GET', url: '/api/v1/statistics/cooperation-income' })
}


// 用户充值列表
export function getCustomerRechargeList() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetCustomerRechargeListResult>>({ method: 'GET', url: '/api/v1/statistics/recharge' })
}


// 用户提现总额
export function getCustomerWithdrawCount() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetCustomerWithdrawTotalResult>>({ method: 'GET', url: '/api/v1/statistics/withdraw-count' })
}


// 用户提现列表
export function getCustomerWithdrawList() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetCustomerWithdrawListResult>>({ method: 'GET', url: '/api/v1/statistics/withdraw' })
}


// 手工扣款
export function getDeduct() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetDeductResult>>({ method: 'GET', url: '/api/v1/statistics/deduct' })
}


// 购彩用户
export function getLotteryUsers() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetLotteryUserListResult>>({ method: 'GET', url: '/api/v1/statistics/lottery-users' })
}


// 赠送扣款
export function getPresentAdd() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetPresentAddResult>>({ method: 'GET', url: '/api/v1/statistics/present-add' })
}


// 赠送加款
export function getPresentPlus() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetPresentPlusResult>>({ method: 'GET', url: '/api/v1/statistics/present-plus' })
}


// 获取代理用户数
export function getProxyCount() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetProxyCountResult>>({ method: 'GET', url: '/api/v1/statistics/proxy-count' })
}


// 代理统计
export function getProxyStatisticsList() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetProxyStatisticsListResult>>({ method: 'GET', url: '/api/v1/statistics/proxy-statistics-list' })
}


// 注册用户数
export function getRegisters() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetRegisterListResult>>({ method: 'GET', url: '/api/v1/statistics/registers' })
}


// 服务费
export function getServiceCharge() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetServiceChargeResult>>({ method: 'GET', url: '/api/v1/statistics/service-charge' })
}


// 获取出票统计
export function getTicketStatisticsInfo() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetTicketStatisticsInfoResult>>({ method: 'GET', url: '/api/v1/statistics/ticket' })
}


// 获取统计信息
export function getTotalStatisticsInfo(query: ServerCommonStatistics.GetTotalStatisticsInfoCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetTotalStatisticsInfoResult>>({ method: 'GET', url: '/api/v1/statistics/total', query })
}


// 手工加款
export function getWithhold() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonStatistics.GetWithholdResult>>({ method: 'GET', url: '/api/v1/statistics/withhold' })
}


// 店铺报表统计
const statisticsApi = {
    getBonusStatisticsInfo, getCooperationIncome, getCustomerRechargeList, getCustomerWithdrawCount, getCustomerWithdrawList, getDeduct, getLotteryUsers, getPresentAdd, getPresentPlus, getProxyCount, getProxyStatisticsList, getRegisters, getServiceCharge, getTicketStatisticsInfo, getTotalStatisticsInfo, getWithhold
}

export default statisticsApi
