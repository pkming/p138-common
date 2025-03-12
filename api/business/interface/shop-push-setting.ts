
import request from "../request";


// 添加订单提示语音
export function addOrderVoice(data: ShopPushSetting.AddOrderVoiceCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/shop/push-setting', data })
}


// 删除订单提示语音
export function deleteOrderVoice(pathParams: ShopPushSetting.DeleteOrderVoiceCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/shop/push-setting/${pathParams.orderVoiceID}` })
}


// 获取订单语音
export function listVoice(query: ShopPushSetting.ListOrderVoiceCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ShopPushSetting.ListOrderVoiceResult>>({ method: 'GET', url: '/api/v1/shop/push-setting', query })
}


// 设置用户订单提示语音
export function setVoice(data: ShopPushSetting.SetOrderVoiceCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: '/api/v1/shop/push-setting/setting', data })
}


// 修改订单提示语音
export function updateOrderVoice(data: ShopPushSetting.UpdateOrderVoiceCommandWithoutPath, pathParams: ShopPushSetting.UpdateOrderVoiceCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/push-setting/${pathParams.orderVoiceID}`, data })
}


// 推送设置
const shopPushSettingApi = {
    addOrderVoice, deleteOrderVoice, listVoice, setVoice, updateOrderVoice
}

export default shopPushSettingApi
