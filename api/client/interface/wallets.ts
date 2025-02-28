
import request from "../request";


// 根据用户ID或者用户名获取钱包信息
export function getUserWallet(query: ServerCommonWallet.GetUserWalletCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.UserWallet>>({ method: 'GET', url: '/api/v1/wallets/info', query })
}


// 获取总金额
export function getWalletTotalAmount(query: ServerCommonWallet.GetWalletTotalAmountCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.GetWalletTotalAmountResult>>({ method: 'GET', url: '/api/v1/wallets/count', query })
}


// 获取所有用户钱包列表(UserType是被查询的用户的)
export function list(query: ServerCommonWallet.ListUserWalletsCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ListUserWalletsResult>>({ method: 'GET', url: '/api/v1/wallets', query })
}


// 获取支付方式列表
export function listPaymentMethod(query: ServerCommonWallet.ListPaymentMethodCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.PlatformPaymentMethod[] | null>>({ method: 'GET', url: '/api/v1/wallets/payment-method', query })
}


// 获取充值记录
export function listPaymentRecord(query: ServerCommonWallet.ListPaymentRecordCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ListPaymentMethodResult>>({ method: 'GET', url: '/api/v1/wallets/record', query })
}


// 充值
export function recharge(data: ServerCommonWallet.UserWalletRechargeCommandWithoutPath, pathParams: ServerCommonWallet.UserWalletRechargeCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.UserWalletRechargeResult>>({ method: 'POST', url: `/api/v1/wallets/${pathParams.walletID}/recharge`, data })
}


// 转账
export function transfer(data: ServerCommonWallet.UserWalletTransferCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/wallets/transfer', data })
}


// 提现
export function withdrawal(data: ServerCommonWallet.UserWalletWithdrawalCommandWithoutPath, pathParams: ServerCommonWallet.UserWalletWithdrawalCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: `/api/v1/wallets/${pathParams.walletID}/withdraw`, data })
}


// 钱包(余额)
const walletsApi = {
    getUserWallet, getWalletTotalAmount, list, listPaymentMethod, listPaymentRecord, recharge, transfer, withdrawal
}

export default walletsApi
