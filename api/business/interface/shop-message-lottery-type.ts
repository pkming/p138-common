
import request from "../request";


// 新增彩票种类
export function createLotteryTypeApi(data: ServerCommonLottery.CreateLotteryCommand) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonLottery.CreatedLotteryResult>>({ method: 'POST', url: '/api/v1/shop/message/lottery-type', data })
}


// 刪除彩票种类
export function deleteLotteryTypeApi(pathParams: ServerCommonLottery.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/shop/message/lottery-type/${pathParams.lotteryTypeID}` })
}


// 取得彩票种类
export function getLotteryTypeApi(pathParams: ServerCommonLottery.PathIDPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonLottery.Lottery>>({ method: 'GET', url: `/api/v1/shop/message/lottery-type/${pathParams.lotteryTypeID}` })
}


// 获取彩票种类(C端使用)
export function listCustomLotteryApi(query: ServerCommonLottery.ListCustomLotteryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonLottery.ListCustomLotteryResult[] | null>>({ method: 'GET', url: '/api/v1/shop/message/lottery-type/custom/get-game-list', query })
}


// 获取彩票种类列表
export function listLotteryTypeApi() {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonLottery.Lottery[] | null>>({ method: 'GET', url: '/api/v1/shop/message/lottery-type' })
}


// 修改彩票种类
export function updateLotteryTypeApi(data: ServerCommonLottery.UpdateLotteryCommandWithoutPath, pathParams: ServerCommonLottery.UpdateLotteryCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'PATCH', url: `/api/v1/shop/message/lottery-type/${pathParams.lotteryTypeID}`, data })
}


// 彩票种类API
const shopMessageLotteryTypeApi = {
    createLotteryTypeApi, deleteLotteryTypeApi, getLotteryTypeApi, listCustomLotteryApi, listLotteryTypeApi, updateLotteryTypeApi
}

export default shopMessageLotteryTypeApi
