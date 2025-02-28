
import request from "../request";


// 建群
export function createGroupApi(data: CustomerImGroup.CreateGroupCommand) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.CreatedGroupResult>>({ method: 'POST', url: '/api/v1/im/groups', data })
}


// 取得群信息
export function getGroupApi(pathParams: CustomerImGroup.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.Group>>({ method: 'GET', url: `/api/v1/im/groups/${pathParams.groupID}` })
}


// 获取群列表
export function listGroupApi() {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImGroup.Group[] | null>>({ method: 'GET', url: '/api/v1/im/groups' })
}


// 修改群信息
export function updateGroupApi(data: CustomerImGroup.UpdateGroupCommandWithoutPath, pathParams: CustomerImGroup.UpdateGroupCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/im/groups/${pathParams.groupID}`, data })
}


// 群
const imGroupsApi = {
    createGroupApi, getGroupApi, listGroupApi, updateGroupApi
}

export default imGroupsApi
