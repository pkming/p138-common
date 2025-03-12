
import request from "../request";


// 新建短期活动
export function createEventConfig() {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'GET', url: '/api/v1/activity/event/event/create' })
}


// 开启短期活动
export function enableEventConfig(data: PkgBusinessActivity.EnableEventConfigCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/activity/event/event/enable/{eventKey}', data })
}


// 获取短期活动
export function getEventConfig(pathParams: PkgBusinessActivity.GetEventConfigCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessActivity.ActivityEvent>>({ method: 'GET', url: `/api/v1/activity/event/event/${pathParams.activityEventID}` })
}


// 获取短期活动列表
export function listEventConfig(query: PkgBusinessActivity.ListEventConfigCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessActivity.ListEventConfigResult>>({ method: 'GET', url: '/api/v1/activity/event/event', query })
}


// 修改短期活动
export function updateEventConfig(pathParams: PkgBusinessActivity.UpdateEventConfigCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'GET', url: `/api/v1/activity/event/event/update/${pathParams.activityEventID}` })
}


// 店铺营销活动
const activityEventApi = {
    createEventConfig, enableEventConfig, getEventConfig, listEventConfig, updateEventConfig
}

export default activityEventApi
