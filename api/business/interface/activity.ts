
import request from "../request";


// 新建活动配置(banner)
export function createActivityConfig(data: PkgBusinessActivity.CreatePlatformActivityConfigCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/activity/system/system_config/activity-configV2', data })
}


// 删除活动配置(banner)
export function deleteActivityConfig(pathParams: PkgBusinessActivity.DeletePlatformActivityConfigCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/activity/system/system_config/activity-configV2/${pathParams.activityID}` })
}


// 获取活动配置详细信息
export function getActivityConfig(pathParams: PkgBusinessActivity.GetActivityConfigCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessActivity.Activity>>({ method: 'GET', url: `/api/v1/activity/system/system_config/activity-configV2/${pathParams.activityID}` })
}


// 获取活动配置列表
export function listActivityConfig(query: PkgBusinessActivity.ListActivityConfigCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessActivity.ListActivityConfigResult>>({ method: 'GET', url: '/api/v1/activity/system/system_config/activity-configV2', query })
}


// 修改活动配置(banner)
export function updateActivityConfig(data: PkgBusinessActivity.UpdatePlatformActivityConfigCommandWithoutPath, pathParams: PkgBusinessActivity.UpdatePlatformActivityConfigCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: `/api/v1/activity/system/system_config/activity-configV2/${pathParams.activityID}`, data })
}


// 活动
const activityApi = {
    createActivityConfig, deleteActivityConfig, getActivityConfig, listActivityConfig, updateActivityConfig
}

export default activityApi
