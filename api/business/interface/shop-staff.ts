
import request from "../request";


// 获取员工信息(注意添加员工和修改员工和删除员工请使用auth的接口)
export function getStaffDetail(pathParams: BusinessShopStaff.GetStaffAndPermissionsCommandPathParams, query: BusinessShopStaff.GetStaffAndPermissionsCommandQueryWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopStaff.GetStaffAndPermissionsResult>>({ method: 'GET', url: `/api/v1/shop/staff/detail/${pathParams.staffID}`, query })
}


// 获取员工列表
export function listShopStaffAndPermissions(query: BusinessShopStaff.ListStaffAndPermissionsCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopStaff.ListStaffAndPermissionsResult>>({ method: 'GET', url: '/api/v1/shop/staff', query })
}


// 设置员工彩种权限
export function setLotteryStaffPermission(data: BusinessShopStaff.SetStaffLotteryPermissionCommandWithoutPath, pathParams: BusinessShopStaff.SetStaffLotteryPermissionCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PUT', url: `/api/v1/shop/staff/${pathParams.staffID}`, data })
}


// 设置员工权限
export function updateShopStaffPermissions(data: BusinessShopStaff.UpdateStaffAndPermissionsCommandWithoutPath, pathParams: BusinessShopStaff.UpdateStaffAndPermissionsCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/staff/update/${pathParams.shopStaffPermissionID}`, data })
}


// 店铺员工(B端使用)
const shopStaffApi = {
    getStaffDetail, listShopStaffAndPermissions, setLotteryStaffPermission, updateShopStaffPermissions
}

export default shopStaffApi
