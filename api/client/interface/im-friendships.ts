
import request from "../request";


// 添加好友
export function addFriendshipApi(data: CustomerImFriendship.AddFriendshipCommandWithoutPath, pathParams: CustomerImFriendship.AddFriendshipCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImFriendship.AddFriendshipResult>>({ method: 'POST', url: `/api/v1/im/friendships/${pathParams.userID}`, data })
}


// 删除好友
export function deleteFriendshipApi(data: CustomerImFriendship.DeleteFriendshipCommandWithoutPath, pathParams: CustomerImFriendship.DeleteFriendshipCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/im/friendships/${pathParams.userID}`, data })
}


// 好友
const imFriendshipsApi = {
    addFriendshipApi, deleteFriendshipApi
}

export default imFriendshipsApi
