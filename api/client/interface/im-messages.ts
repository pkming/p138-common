
import request from "../request";


// 取得单个消息
export function getMessageApiByMessageId(pathParams: CustomerImMessage.GetMessagePathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImMessage.Message>>({ method: 'GET', url: `/api/v1/im/messages/getOne/${pathParams.messageID}` })
}


// 拉取消息
export function listMessageTypeApi(pathParams: CustomerImMessage.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<CustomerImMessage.Message[] | null>>({ method: 'GET', url: `/api/v1/im/messages/${pathParams.roomID}` })
}


// 消息
const imMessagesApi = {
    getMessageApiByMessageId, listMessageTypeApi
}

export default imMessagesApi
