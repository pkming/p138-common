
import request from "../request";


// 新增会话
export function createChatApi(data: CustomerImChat.CreateChatCommand) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImChat.CreatedChatResult>>({ method: 'POST', url: '/api/v1/im/chat', data })
}


// 刪除会话
export function deleteChatApi(pathParams: CustomerImChat.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/im/chat/${pathParams.chatID}` })
}


// 取得会话
export function getChatApi(pathParams: CustomerImChat.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImChat.Chat>>({ method: 'GET', url: `/api/v1/im/chat/${pathParams.chatID}` })
}


// 获取会话列表
export function listChatApi() {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImChat.Chat[] | null>>({ method: 'GET', url: '/api/v1/im/chat' })
}


// 修改会话
export function updateChatApi(data: CustomerImChat.UpdateChatCommandWithoutPath, pathParams: CustomerImChat.UpdateChatCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/im/chat/${pathParams.chatID}`, data })
}


// 会话
const imChatApi = {
    createChatApi, deleteChatApi, getChatApi, listChatApi, updateChatApi
}

export default imChatApi
