
import request from "../request";


// 获取用户提现列表
export function listUserWithdraw() {
    return request<BasicTypes.DefaultResponseWrapper<anonymous.Class0[] | null[] | null>>({ method: 'GET', url: '/api/v1/shop/withdraw-payment' })
}


// 用户充值方式
const shopWithdrawPaymentApi = {
    listUserWithdraw
}

export default shopWithdrawPaymentApi
