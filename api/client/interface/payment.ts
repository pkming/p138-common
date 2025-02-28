
import request from "../request";


// 新增支付渠道
export function create(data: PkgCustomerPayment.CreateCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPayment.CreatedResult>>({ method: 'POST', url: '/api/v1/payment', data })
}


// 取得支付渠道
export function get(pathParams: PkgCustomerPayment.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPayment.LotteryPaymentChannel>>({ method: 'GET', url: `/api/v1/payment/${pathParams.paymentID}` })
}


// 获取支付渠道列表
export function list() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPayment.LotteryPaymentChannel[] | null>>({ method: 'GET', url: '/api/v1/payment' })
}


// 刪除支付渠道
export function remove(pathParams: PkgCustomerPayment.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/payment/${pathParams.paymentID}` })
}


// 修改支付渠道
export function updatePartial(data: PkgCustomerPayment.UpdateCommandWithoutPath, pathParams: PkgCustomerPayment.UpdateCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/payment/${pathParams.paymentID}`, data })
}


// 支付渠道
const paymentApi = {
    create, get, list, remove, updatePartial
}

export default paymentApi
