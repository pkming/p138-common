
import request from "../request";


// 用户登出接口
export function createSignOut(data: ServerCommonAuth.UserSignOutCommandWithoutPath, pathParams: ServerCommonAuth.UserSignOutCommandPathParams, header: ServerCommonAuth.UserSignOutCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.UserSignOutResult>>({ method: 'POST', url: `/api/v1/auth/${pathParams.userID}/sign-out`, data, header })
}


// 解析推荐信息
export function decodeReferralUrl(query: ServerCommonAuth.DecodeReferralUrlCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.DecodeReferralUrlCommandResult>>({ method: 'GET', url: '/api/v1/auth/decode-referral-info', ignoreAuth: true, query })
}


// 获取验证码
export function generatorCaptcha() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.GenerateCaptchaResult>>({ method: 'GET', url: '/api/v1/auth/captcha' })
}


// 生成用户推荐链接
export function generatorReferralUrl(pathParams: ServerCommonAuth.GenerateReferralUrlCommandPathParams, header: ServerCommonAuth.GenerateReferralUrlCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<string>>({ method: 'GET', url: `/api/v1/auth/${pathParams.userID}/referral-url`, header })
}


// 用户默认头像
export function getDefaultAvatar() {
    return request<BasicTypes.DefaultResponseWrapper<string>>({ method: 'GET', url: '/api/v1/auth/avatar' })
}


// 刷新或获取用户token
export function getToken(pathParams: ServerCommonAuth.GetUserTokenCommandPathParams, header: ServerCommonAuth.GetUserTokenCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<string>>({ method: 'GET', url: `/api/v1/auth/${pathParams.userID}/refresh-token`, ignoreAuth: true, header })
}


// 获取用户基本信息
export function getUserBasicInfoApi(pathParams: ServerCommonAuth.GetUserBasicInfoCommandPathParams, header: ServerCommonAuth.GetUserBasicInfoCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonUser.User>>({ method: 'GET', url: `/api/v1/auth/${pathParams.userID}/basic-info`, header })
}


// 获取用户基本信息(包括用户类型,用户ID,用户所属商店,用户钱包)
export function getUserInfo(pathParams: ServerCommonAuth.GetUserInfoCommandPathParams, header: ServerCommonAuth.GetUserInfoCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.GetUserInfoResult>>({ method: 'GET', url: `/api/v1/auth/user-info/${pathParams.userID}`, header })
}


// 邀请查询(邀请列表和数量)
export function listReferralInfo(query: ServerCommonAuth.ListReferralInfoCommandQuery, header: ServerCommonAuth.ListReferralInfoCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.ListReferralInfoResult>>({ method: 'GET', url: '/api/v1/auth/list-referral-info', query, header })
}


// 获取用户列表
export function listUser(query: ServerCommonAuth.ListUserCommandQuery, header: ServerCommonAuth.ListUserCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.PageData>>({ method: 'GET', url: '/api/v1/auth/list/user', query, header })
}


// 获取用户列表(游标)
export function listUserByCursor(query: ServerCommonAuth.ListUserByCursorCommandQuery, header: ServerCommonAuth.ListUserByCursorCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.PageData>>({ method: 'GET', url: '/api/v1/auth/list/user/cursor', query, header })
}


// 刷新用户token
export function refreshToken(pathParams: ServerCommonAuth.RefreshTokenCommandPathParams, header: ServerCommonAuth.RefreshTokenCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<string>>({ method: 'GET', url: `/api/v1/auth/${pathParams.userID}/refresh/token`, header })
}


// 用户注销接口
export function userLogoutApi(pathParams: ServerCommonAuth.LogoutCommandPathParams, header: ServerCommonAuth.LogoutCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/auth/${pathParams.userID}/logout`, header })
}


// 用户重置密码
export function userResetPasswordApi(data: ServerCommonAuth.UserResetPasswordCommand, header: ServerCommonAuth.UserResetPasswordCommandHeader) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: '/api/v1/auth/reset/password', data, header })
}


// 用户登入接口
export function userSignInApi(data: ServerCommonAuth.UserSignInCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.UserSignInResult>>({ method: 'POST', url: '/api/v1/auth/sign-in', ignoreAuth: true, data })
}


// 修改人用户基本信息
export function userUpdateBasicInfoApi(data: ServerCommonAuth.UpdateBasicInfoCommandWithoutPath, pathParams: ServerCommonAuth.UpdateBasicInfoCommandPathParams, header: ServerCommonAuth.UpdateBasicInfoCommandHeaderWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.UpdateBasicInfoResult>>({ method: 'PATCH', url: `/api/v1/auth/${pathParams.userID}/basic-info`, data, header })
}


// 用户上传头像
export function userUploadAvatarApi(data: ServerCommonAuth.UserUploadAvatarCommandWithoutPath, pathParams: ServerCommonAuth.UserUploadAvatarCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonAuth.UserUploadAvatarResult>>({ method: 'POST', url: `/api/v1/auth/${pathParams.userID}/avatar`, data })
}


// 用户认证API
const authApi = {
    createSignOut, decodeReferralUrl, generatorCaptcha, generatorReferralUrl, getDefaultAvatar, getToken, getUserBasicInfoApi, getUserInfo, listReferralInfo, listUser, listUserByCursor, refreshToken, userLogoutApi, userResetPasswordApi, userSignInApi, userUpdateBasicInfoApi, userUploadAvatarApi
}

export default authApi
