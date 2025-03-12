
import request from "../request";


// 获取聊天列表
export function listChat(query: PkgBusinessChat.ListChatApiCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessChat.ListChatApiCommandResult>>({ method: 'GET', url: '/api/v1/chat/chatList', query })
}


// 聊天
const chatApi = {
    listChat
}

export default chatApi
