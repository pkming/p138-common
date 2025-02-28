
import request from "../request";


// 新增插屏弹窗
export function create(data: PkgCustomerPopup.CreateCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPopup.CreatedResult>>({ method: 'POST', url: '/api/v1/popup', data })
}


// 根据插屏弹窗ID获取弹窗
export function get(pathParams: PkgCustomerPopup.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPopup.PopupNotification>>({ method: 'GET', url: `/api/v1/popup/${pathParams.id}` })
}


// 获取插屏弹窗列表
export function list() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerPopup.PopupNotification[] | null>>({ method: 'GET', url: '/api/v1/popup' })
}


// 刪除插屏弹窗
export function remove(pathParams: PkgCustomerPopup.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/popup/${pathParams.id}` })
}


// 修改插屏弹窗
export function updatePartial(data: PkgCustomerPopup.UpdateCommandWithoutPath, pathParams: PkgCustomerPopup.UpdateCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/popup/${pathParams.id}`, data })
}


// 插屏
const popupApi = {
    create, get, list, remove, updatePartial
}

export default popupApi
