
import request from "../request";


// 邀请店主
export function getReferralList() {
    return request<BasicTypes.DefaultResponseWrapper<BusinessShopReferral.GetReferralResult>>({ method: 'GET', url: '/api/v1/shop/referral/referral/list' })
}


// 邀请店主
const shopReferralApi = {
    getReferralList
}

export default shopReferralApi
