
import request from "../request";


// 审批用户申请提款
export function approvalUserWithdraw(data: BusinessShopWithdraw.ApprovalUserWithdrawCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: '/api/v1/shop/withdraw/approval', data })
}


// 获取用户提现列表
export function listUserWithdraw(query: BusinessShopWithdraw.ListUserWithdrawCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopWithdraw.ListUserWithdrawResult>>({ method: 'GET', url: '/api/v1/shop/withdraw', query })
}


// 修改用户钱包充提限制
export function patchWalletLimit(data: BusinessShopWithdraw.PatchWalletLimitCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/shop/withdraw/user/withdraw/limit', data })
}


// 获取店铺充提限制信息
export function withdrawLimitQuery(query: BusinessShopWithdraw.WithdrawLimitQueryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopWithdraw.WithdrawLimitQueryResult>>({ method: 'GET', url: '/api/v1/shop/withdraw/withdraw-limit-query', query })
}


// 提现申请
export function withdrawalApplication(data: ServerCommonWallet.WithdrawalApplicationCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.WithdrawalApplicationResult>>({ method: 'POST', url: '/api/v1/shop/withdraw/withdrawal-application', data })
}


// 提现管理
const shopWithdrawApi = {
    approvalUserWithdraw, listUserWithdraw, patchWalletLimit, withdrawLimitQuery, withdrawalApplication
}

export default shopWithdrawApi
