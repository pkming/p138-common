
import request from "../request";


// 派奖(支持批量派奖)
export function distributePrize(data: ShopDistributePrize.DistributePrizeApiCommand, header: ShopDistributePrize.DistributePrizeApiCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<ShopDistributePrize.DistributePrizeResult>>({ method: 'POST', url: '/api/v1/shop/distribute-prize/rebate-order', data, header })
}


// 获取待派奖列表
export function listPendingDistributePrize(query: ShopDistributePrize.ListPendingDistributePrizeCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ShopDistributePrize.ListPendingDistributePrizeCommandResult[] | null>>({ method: 'GET', url: '/api/v1/shop/distribute-prize/return-order', query })
}


// 获取已派奖列表
export function listPrizesDistributed(query: ShopDistributePrize.ListPrizesDistributedCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ShopDistributePrize.ListPrizesDistributedResult[] | null>>({ method: 'GET', url: '/api/v1/shop/distribute-prize/list', query })
}


// 修改奖金
export function updateOrderBonus(data: ServerCommonOrder.UpdateOrderBonusCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/shop/distribute-prize/update-bonus', data })
}


// 接单或者撤单或者出票,取票(到店取票)
export function updateOrderTicket(data: ServerCommonOrder.UpdateOrderTicketCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/shop/distribute-prize/update-order-ticket', data })
}


// 派奖管理
const shopDistributePrizeApi = {
    distributePrize, listPendingDistributePrize, listPrizesDistributed, updateOrderBonus, updateOrderTicket
}

export default shopDistributePrizeApi
