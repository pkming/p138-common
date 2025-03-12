
import request from "../request";


// 获取店铺消息列表
export function listShopMessage(query: BusinessShopMessage.ListShopMessageCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopMessage.ListShopMessageResult>>({ method: 'GET', url: '/api/v1/shop/message', query })
}


// 店铺消息
const shopMessageApi = {
    listShopMessage
}

export default shopMessageApi
