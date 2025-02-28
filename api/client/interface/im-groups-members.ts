
import request from "../request";


// 查看指定某个群成员
export function getGroupMemberInfo(pathParams: CustomerImGroup.MemberPathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.GroupMember>>({ method: 'GET', url: `/api/v1/im/groups/members/group/${pathParams.groupID}/${pathParams.memberID}/member-info` })
}


// 加群
export function joinGroupApi(data: CustomerImGroup.JoinCommandWithoutPath, pathParams: CustomerImGroup.JoinCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.JoinResult>>({ method: 'POST', url: `/api/v1/im/groups/members/group/${pathParams.groupID}/${pathParams.memberID}/join`, data })
}


// 获取群
export function listGroupByUserIdApi(pathParams: CustomerImGroup.ListGroupByUserIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.Group[] | null>>({ method: 'GET', url: `/api/v1/im/groups/members/${pathParams.userID}` })
}


// 获取群成员
export function listMember(pathParams: CustomerImGroup.PathGroupIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.GroupMember[] | null>>({ method: 'GET', url: `/api/v1/im/groups/members/group/${pathParams.groupID}` })
}


// 修改群配置或者群昵称
export function updateGroupProfileApi(data: CustomerImGroup.UpdateGroupProfileCommandWithoutPath, pathParams: CustomerImGroup.UpdateGroupProfileCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/im/groups/members/${pathParams.groupMemberID}`, data })
}


// 群成员
const imGroupsMembersApi = {
    getGroupMemberInfo, joinGroupApi, listGroupByUserIdApi, listMember, updateGroupProfileApi
}

export default imGroupsMembersApi
