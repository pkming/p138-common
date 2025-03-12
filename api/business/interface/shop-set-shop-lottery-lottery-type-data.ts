
import request from "../request";


// 批量插入福利彩票数据源
export function createCharityLotteryData(data: LotteryDataSource.CreateCharityLotteryCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/shop/set-shop-lottery/lottery-type/data/charity', data })
}


// 批量插入体育彩票数据源
export function createSportsLotteryData(data: LotteryDataSource.CreateLeagueSportsLotteryCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/shop/set-shop-lottery/lottery-type/data/sports', data })
}


// 获取福利彩票数据源
export function getCharityLotteryData(query: LotteryDataSource.ListCharityLotteryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDataSource.CharityLotteryDataSource[] | null>>({ method: 'GET', url: '/api/v1/shop/set-shop-lottery/lottery-type/data/charity', query })
}


// 按联赛获取体育彩票数据源
export function getLeagueSportsLotteryData(query: LotteryDataSource.ListLeagueSportsLotteryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDataSource.SportsLotteryDataSource[] | null>>({ method: 'GET', url: '/api/v1/shop/set-shop-lottery/lottery-type/data/sports/league', query })
}


// 按时间获取体育彩票数据源
export function getTimeSportsLotteryData(query: LotteryDataSource.ListTimeSportsLotteryCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDataSource.TimeSportsLotteryResult[] | null>>({ method: 'GET', url: '/api/v1/shop/set-shop-lottery/lottery-type/data/sports/time', query })
}


// 彩票数据源
const shopSetShopLotteryLotteryTypeDataApi = {
    createCharityLotteryData, createSportsLotteryData, getCharityLotteryData, getLeagueSportsLotteryData, getTimeSportsLotteryData
}

export default shopSetShopLotteryLotteryTypeDataApi
