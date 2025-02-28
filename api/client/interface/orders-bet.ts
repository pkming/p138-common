
import request from "../request";


// 奖金计算器
export function bonusCalculator(data: ServerCommonOrder.BonusCalculatorCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonOrder.BonusCalculatorResult>>({ method: 'POST', url: '/api/v1/orders/bet/bonus/jc', data })
}


// 用户投注或者保存方案
export function createLotteryOrderOrScheme(data: ServerCommonOrder.CreateOrderOrSaveSchemeCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonOrder.CreateOrderOrSaveSchemeResult>>({ method: 'POST', url: '/api/v1/orders/bet', data })
}


// 刪除订单或方案
export function deleteLotteryOrderOrSchemeByOrderId(pathParams: ServerCommonOrder.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/orders/bet/${pathParams.orderId}` })
}


// 获取订单列表(投注记录)
export function getBetList(query: ServerCommonOrder.ListOrderCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonOrder.ListOrderResult>>({ method: 'GET', url: '/api/v1/orders/bet', query })
}


// 获取投注记录(待出票,待开奖,已中奖的个数)
export function getBetRecord(pathParams: ServerCommonOrder.GetBetRecordCountCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonOrder.GetBetRecordCountResult>>({ method: 'GET', url: `/api/v1/orders/bet/record/${pathParams.userID}/count` })
}


// 获取订单或方案详情
export function getOrderOrSchemeDetailsByOrderId(pathParams: ServerCommonOrder.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonOrder.LotteryOrder>>({ method: 'GET', url: `/api/v1/orders/bet/${pathParams.orderId}` })
}


// C端订单
const ordersBetApi = {
    bonusCalculator, createLotteryOrderOrScheme, deleteLotteryOrderOrSchemeByOrderId, getBetList, getBetRecord, getOrderOrSchemeDetailsByOrderId
}

export default ordersBetApi
