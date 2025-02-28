
import request from "../request";


// 新增会员等级
export function createMembershipLevelsApi(data: PkgCustomerMembership.CreateMembershipLevelCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerMembership.CreatedMembershipLevelResult>>({ method: 'POST', url: '/api/v1/membership', data })
}


// 删除会员等级
export function deleteMembershipLevelsApi(pathParams: PkgCustomerMembership.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/membership/${pathParams.vipID}` })
}


// 根据会员等级ID获取会员等级信息
export function getMembershipLevelsByVipIdApi(pathParams: PkgCustomerMembership.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerMembership.MembershipLevel>>({ method: 'GET', url: `/api/v1/membership/${pathParams.vipID}/info` })
}


// 获取会员等级列表
export function listMembershipLevelsApi() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerMembership.MembershipLevel[] | null>>({ method: 'GET', url: '/api/v1/membership' })
}


// 修改会员等级
export function updateMembershipLevelsApi(data: PkgCustomerMembership.UpdateMembershipLevelCommandWithoutPath, pathParams: PkgCustomerMembership.UpdateMembershipLevelCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/membership/${pathParams.vipID}`, data })
}


// 会员
const membershipApi = {
    createMembershipLevelsApi, deleteMembershipLevelsApi, getMembershipLevelsByVipIdApi, listMembershipLevelsApi, updateMembershipLevelsApi
}

export default membershipApi
