
import request from "../request";


// 店铺新增用户
export function addCustomer(data: ServerCommonAuth.AddCustomerCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.AddCustomerResult>>({ method: 'POST', url: '/api/v1/shop/customer/register-by-shop', data })
}


// 获取用户基本信息(包括用户类型,用户ID,用户所属商店,用户钱包)
export function getUserInfo(pathParams: ServerCommonAuth.GetUserInfoCommandPathParams, header: ServerCommonAuth.GetUserInfoCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.GetUserInfoResult>>({ method: 'GET', url: `/api/v1/shop/customer/user-info/${pathParams.userID}`, header })
}


// 获取用户列表
export function listCustomer(query: BusinessShopCustomer.ListCustomerCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopCustomer.ListCustomerResult>>({ method: 'GET', url: '/api/v1/shop/customer', query })
}


// 赠送加扣款/加扣款
export function plusDeduct(data: ServerCommonWallet.PlusDeductCommandWithoutPath, pathParams: ServerCommonWallet.PlusDeductCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: `/api/v1/shop/customer/plus-deduct/${pathParams.userID}`, data })
}


// 设置用户备注，设置星标用户，设为代理
export function updateCustomerInfo(data: ServerCommonAuth.UpdateCustomerCommandWithoutPath, pathParams: ServerCommonAuth.UpdateCustomerCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/customer/customer/${pathParams.userID}`, data })
}


// 用户重置密码
export function userResetPasswordApi(data: ServerCommonAuth.UserResetPasswordCommand, header: ServerCommonAuth.UserResetPasswordCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: '/api/v1/shop/customer/reset/password', data, header })
}


// 用户管理
const shopCustomerApi = {
    addCustomer, getUserInfo, listCustomer, plusDeduct, updateCustomerInfo, userResetPasswordApi
}

export default shopCustomerApi
