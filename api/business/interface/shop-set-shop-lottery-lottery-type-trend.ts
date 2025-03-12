
import request from "../request";


// 导入彩票走势数据
export function createTrend(data: CommonLotteryTrend.CreateTrendCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/shop/set-shop-lottery/lottery-type/trend', data })
}


// 获取彩票走势
export function listTrend(query: CommonLotteryTrend.ListTrendCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<CommonLotteryTrend.Trend[] | null>>({ method: 'GET', url: '/api/v1/shop/set-shop-lottery/lottery-type/trend', query })
}


// 走势图
const shopSetShopLotteryLotteryTypeTrendApi = {
    createTrend, listTrend
}

export default shopSetShopLotteryLotteryTypeTrendApi
