
import request from "../request";


// 创建通知
export function createNotice(data: PkgBusinessNotice.CreateNoticeCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessNotice.CreateNoticeResult>>({ method: 'POST', url: '/api/v1/notice/platform/notice', data })
}


// 删除通知
export function deleteNotice(pathParams: PkgBusinessNotice.DeleteNoticeCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessNotice.DeleteNoticeResult>>({ method: 'DELETE', url: `/api/v1/notice/platform/notice/${pathParams.noticeID}` })
}


// 获取平台通知信息(弹窗通知)
export function getPopUpNotification(query: PkgBusinessNotice.GetPopUpNotificationCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessNotice.Notification>>({ method: 'GET', url: '/api/v1/notice/platform/notice', query })
}


// 获取订单管理的公告信息(跑马灯通知)
export function listAppNotice(query: PkgBusinessNotice.ListAppMarqueeNoticeCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessNotice.ListAppMarqueeNoticeResult>>({ method: 'GET', url: '/api/v1/notice/platform/notice/list-app', query })
}


// 修改通知
export function updateNotice(data: PkgBusinessNotice.UpdateNoticeCommandWithoutPath, pathParams: PkgBusinessNotice.UpdateNoticeCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgBusinessNotice.UpdateNoticeResult>>({ method: 'PUT', url: `/api/v1/notice/platform/notice/${pathParams.noticeID}`, data })
}


// 公告
const noticeApi = {
    createNotice, deleteNotice, getPopUpNotification, listAppNotice, updateNotice
}

export default noticeApi
