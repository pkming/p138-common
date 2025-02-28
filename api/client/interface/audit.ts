
import request from "../request";


// 新增用户操作审计
export function create(data: PkgCustomerAudit.CreateUserAuditCommand) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerAudit.CreatedUserAuditResult>>({ method: 'POST', url: '/api/v1/audit', data })
}


// 根据用户ID获取用户操作记录
export function get(pathParams: PkgCustomerAudit.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerAudit.UserAudit[] | null>>({ method: 'GET', url: `/api/v1/audit/${pathParams.userID}` })
}


// 获取用户操作审计列表
export function list() {
    return request<BasicTypes.DefaultResponseWrapper<PkgCustomerAudit.UserAudit[] | null>>({ method: 'GET', url: '/api/v1/audit' })
}


// 审计
const auditApi = {
    create, get, list
}

export default auditApi
