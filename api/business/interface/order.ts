
import request from "../request";


// 获取待接订单
export function getPendingOrder(query: PkgBusinessOrder.GetPendingOrderCommandQuery, header: PkgBusinessOrder.GetPendingOrderCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessOrder.GetPendingOrderResult>>({ method: 'GET', url: '/api/v1/order/pending-order', query, header })
}


// 获取待接单或待出票列表
export function getReceiveOrder(query: PkgBusinessOrder.GetReceiveOrderCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessOrder.GetReceiveOrderResult>>({ method: 'GET', url: '/api/v1/order/receive-order', query })
}


// 订单详情
export function getReceiveOrderDetail(pathParams: PkgBusinessOrder.GetReceiveOrderDetailCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessOrder.GetReceiveOrderDetailResult>>({ method: 'GET', url: `/api/v1/order/receive-order-detail/${pathParams.orderID}` })
}


// 订单查询/用户管理-投注记录
export function orderQuery(query: PkgBusinessOrder.OrderQueryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessOrder.OrderQueryResult>>({ method: 'GET', url: '/api/v1/order/order-query', query })
}


// 接单或者撤单或者出票,取票(到店取票)
export function updateOrderTicket(data: ServerCommonOrder.UpdateOrderTicketCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/order/update-order-ticket', data })
}


// 店铺订单(订单管理)
const orderApi = {
    getPendingOrder, getReceiveOrder, getReceiveOrderDetail, orderQuery, updateOrderTicket
}

export default orderApi
