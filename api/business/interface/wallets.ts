
import request from "../request";


// 添加支付方式
export function addPlatformPaymentMethod(data: ServerCommonWallet.AddPlatformPaymentMethodCommandWithoutPath, pathParams: ServerCommonWallet.AddPlatformPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.PlatformPaymentMethod>>({ method: 'PUT', url: `/api/v1/wallets/add-platform-payment-method/${pathParams.paymentMethodID}`, data })
}


// 店主申请开通用户充值方式
export function applyForActivationShopCustomerPaymentMethod(data: ServerCommonWallet.ApplyForActivationShopCustomerPaymentMethodCommandWithoutPath, pathParams: ServerCommonWallet.ApplyForActivationShopCustomerPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ShopCollectionMethod>>({ method: 'POST', url: `/api/v1/wallets/apply-for-activation-shop-customer-payment-method/${pathParams.paymentMethodID}`, data })
}


// 创建平台(系统)支付方式基本信息
export function createPlatformPaymentMethod(data: ServerCommonWallet.CreatePlatformPaymentMethodCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.PlatformPaymentMethod>>({ method: 'POST', url: '/api/v1/wallets/create-platform-payment-method', data })
}


// 删除平台(系统)支付方式
export function deletePlatformPaymentMethod(data: ServerCommonWallet.DeletePlatformPaymentMethodCommandWithoutPath, pathParams: ServerCommonWallet.DeletePlatformPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/wallets/delete-platform-payment-method/${pathParams.paymentMethodID}`, data })
}


// 删除店铺用户充值支付方式
export function deleteShopCustomerPaymentMethod(pathParams: ServerCommonWallet.DeleteShopCustomerPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/wallets/delete-shop-customer-payment-method/${pathParams.shopPaymentMethodID}` })
}


// 获取平台(系统)支付方式详细信息
export function getPlatformPaymentMethod(pathParams: ServerCommonWallet.GetPlatformPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.PlatformPaymentMethod>>({ method: 'GET', url: `/api/v1/wallets/get-platform-payment-method/${pathParams.paymentMethodID}` })
}


// 获取店铺用户充值支付方式详细信息
export function getShopCustomerPaymentMethod(pathParams: ServerCommonWallet.GetShopCustomerPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ShopCollectionMethod>>({ method: 'GET', url: `/api/v1/wallets/get-shop-customer-payment-method/${pathParams.shopPaymentMethodID}` })
}


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


// 获取充值记录
export function listPaymentRecord(query: ServerCommonWallet.ListPaymentRecordCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ListPaymentRecordResult>>({ method: 'GET', url: '/api/v1/wallets/list-payment-record', query })
}


// 获取平台(系统)支付方式列表
export function listPlatformPaymentMethod(query: ServerCommonWallet.ListPlatformPaymentMethodCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ListPlatformPaymentMethodResult>>({ method: 'GET', url: '/api/v1/wallets/list-platform-payment-method', query })
}


// 获取店铺用户充值支付方式列表
export function listShopCustomerPaymentMethod(query: ServerCommonWallet.ListCustomerPaymentMethodCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ListCustomerPaymentMethodResult>>({ method: 'GET', url: '/api/v1/wallets/list-shop-customer-payment-method', query })
}


// 充值
export function recharge(data: ServerCommonWallet.UserWalletRechargeCommandWithoutPath, pathParams: ServerCommonWallet.UserWalletRechargeCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.UserWalletRechargeResult>>({ method: 'POST', url: `/api/v1/wallets/${pathParams.walletID}/recharge`, data })
}


// 店铺用户充值
export function shopCustomerRecharge(data: ServerCommonWallet.ShopCustomerRechargeCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ShopCustomerRechargeResult>>({ method: 'POST', url: '/api/v1/wallets/shop-customer-recharge', data })
}


// 店铺充值
export function shopRecharge(data: ServerCommonWallet.ShopRechargeCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ShopRechargeResult>>({ method: 'POST', url: '/api/v1/wallets/shop-recharge', data })
}


// 转账
export function transfer(data: ServerCommonWallet.UserWalletTransferCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/wallets/transfer', data })
}


// 修改平台(系统)支付方式
export function updatePlatformPaymentMethod(data: ServerCommonWallet.UpdatePlatformPaymentMethodCommandWithoutPath, pathParams: ServerCommonWallet.UpdatePlatformPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.PlatformPaymentMethod>>({ method: 'PUT', url: `/api/v1/wallets/update-platform-payment-method/${pathParams.paymentMethodID}`, data })
}


// 修改店铺用户充值支付方式
export function updateShopCustomerPaymentMethod(data: ServerCommonWallet.UpdateShopCustomerPaymentMethodCommandWithoutPath, pathParams: ServerCommonWallet.UpdateShopCustomerPaymentMethodCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.ShopCollectionMethod>>({ method: 'PUT', url: `/api/v1/wallets/update-shop-customer-payment-method/${pathParams.shopPaymentMethodID}`, data })
}


// 提现
export function withdrawal(data: ServerCommonWallet.UserWalletWithdrawalCommandWithoutPath, pathParams: ServerCommonWallet.UserWalletWithdrawalCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: `/api/v1/wallets/${pathParams.walletID}/withdraw`, data })
}


// 提现申请
export function withdrawalApplication(data: ServerCommonWallet.WithdrawalApplicationCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonWallet.WithdrawalApplicationResult>>({ method: 'POST', url: '/api/v1/wallets/withdrawal-application', data })
}


// 钱包(余额)
const walletsApi = {
    addPlatformPaymentMethod, applyForActivationShopCustomerPaymentMethod, createPlatformPaymentMethod, deletePlatformPaymentMethod, deleteShopCustomerPaymentMethod, getPlatformPaymentMethod, getShopCustomerPaymentMethod, getUserWallet, getWalletTotalAmount, list, listPaymentRecord, listPlatformPaymentMethod, listShopCustomerPaymentMethod, recharge, shopCustomerRecharge, shopRecharge, transfer, updatePlatformPaymentMethod, updateShopCustomerPaymentMethod, withdrawal, withdrawalApplication
}

export default walletsApi
