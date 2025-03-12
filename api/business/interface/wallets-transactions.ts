
import request from "../request";


// 获取所有用户钱包交易明细列表
export function list(query: ServerCommonWallet.GetAllUserWalletTransactionCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.GetAllUserWalletTransactionResult>>({ method: 'GET', url: '/api/v1/wallets/transactions', query })
}


// 获取用户交易明细列表
export function listWalletTransaction(pathParams: ServerCommonWallet.GetUserWalletTransactionCommandPathParams, query: ServerCommonWallet.GetUserWalletTransactionCommandQueryWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.GetUserWalletTransactionResult>>({ method: 'GET', url: `/api/v1/wallets/transactions/${pathParams.walletID}`, query })
}


// 钱包交易明细
const walletsTransactionsApi = {
    list, listWalletTransaction
}

export default walletsTransactionsApi
