
import request from "../request";


// 新增广播
export function create(data: PkgCustomerBroadcast.CreateBroadcastCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBroadcast.CreatedBroadcastResult>>({ method: 'POST', url: '/api/v1/broadcast', data })
}


// 根据广播ID获取弹窗
export function get(pathParams: PkgCustomerBroadcast.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBroadcast.Broadcast>>({ method: 'GET', url: `/api/v1/broadcast/${pathParams.broadcastID}` })
}


// 获取广播列表
export function list() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerBroadcast.Broadcast[] | null>>({ method: 'GET', url: '/api/v1/broadcast' })
}


// 刪除广播
export function remove(pathParams: PkgCustomerBroadcast.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/broadcast/${pathParams.broadcastID}` })
}


// 修改广播
export function updatePartial(data: PkgCustomerBroadcast.UpdateBroadcastCommandWithoutPath, pathParams: PkgCustomerBroadcast.UpdateBroadcastCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/broadcast/${pathParams.broadcastID}`, data })
}


// 广播
const broadcastApi = {
    create, get, list, remove, updatePartial
}

export default broadcastApi
