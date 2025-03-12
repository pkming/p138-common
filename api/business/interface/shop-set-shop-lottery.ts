
import request from "../request";


// 创建店铺彩种
export function createShopLottery(data: LotteryShopLottery.CreateShopLotteryCommand) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryShopLottery.CreateShopLotteryResult>>({ method: 'POST', url: '/api/v1/shop/set-shop-lottery', data })
}


// 获取彩种
export function getShopLottery(pathParams: LotteryShopLottery.GetShopLotteryCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<ServerCommonLottery.ShopLottery>>({ method: 'GET', url: `/api/v1/shop/set-shop-lottery/${pathParams.shopLotteryID}` })
}


// 获取彩种列表
export function listShopLottery(query: LotteryShopLottery.ListShopLotteryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryShopLottery.ListShopLotteryResult[] | null>>({ method: 'GET', url: '/api/v1/shop/set-shop-lottery', query })
}


// 设置彩种
export function setShopLottery(data: LotteryShopLottery.SetShopLotteryCommandWithoutPath, pathParams: LotteryShopLottery.SetShopLotteryCommandPathParams, query: LotteryShopLottery.SetShopLotteryCommandQueryWithoutPath) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryShopLottery.SetShopLotteryResult>>({ method: 'PUT', url: `/api/v1/shop/set-shop-lottery/${pathParams.shopLotteryID}`, data, query })
}


// 店铺彩种设置
const shopSetShopLotteryApi = {
    createShopLottery, getShopLottery, listShopLottery, setShopLottery
}

export default shopSetShopLotteryApi
