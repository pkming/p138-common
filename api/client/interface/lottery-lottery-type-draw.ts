
import request from "../request";


// 批量插入竞技彩开奖公告
export function createDigitalDrawAnnouncement(data: LotteryDrawAnnouncement.CreateDigitalDrawAnnouncementCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/lottery/lottery-type/draw/digital', data })
}


// 批量插入数字彩开奖公告
export function createSportsDrawAnnouncement(data: LotteryDrawAnnouncement.CreateSportsDrawAnnouncementCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/lottery/lottery-type/draw/sports', data })
}


// 批量插入竞技彩的统计信息
export function createSportsStatistics(data: LotteryDrawAnnouncement.CreateSportsStatisticsCommand) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'POST', url: '/api/v1/lottery/lottery-type/draw/sports/statistics', data })
}


// 删除彩票统计数据
export function deleteSportsStatistics(pathParams: LotteryDrawAnnouncement.DeleteSportsStatisticsCommandPathParams) {
    return request<BasicTypes.DefaultResponseWrapper<any>>({ method: 'DELETE', url: `/api/v1/lottery/lottery-type/draw/sports/statistics/${pathParams.sportsStatisticsID}` })
}


// 获取数字彩或传统足彩开奖公告
export function listDigitalDrawAnnouncement(query: LotteryDrawAnnouncement.ListDigitalDrawAnnouncementCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDrawAnnouncement.DigitalDrawAnnouncement>>({ method: 'GET', url: '/api/v1/lottery/lottery-type/draw/digital', query })
}


// 获取竞技彩开奖公告
export function listSportsDrawAnnouncement(query: LotteryDrawAnnouncement.ListSportsDrawAnnouncementCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDrawAnnouncement.SportsDrawAnnouncement>>({ method: 'GET', url: '/api/v1/lottery/lottery-type/draw/sports', query })
}


// 获取竞技彩的统计信息
export function listSportsStatistics(query: LotteryDrawAnnouncement.ListSportsStatisticsCommandQuery) {
    return request<BasicTypes.DefaultResponseWrapper<LotteryDrawAnnouncement.LotteryStatistics>>({ method: 'GET', url: '/api/v1/lottery/lottery-type/draw/sports/statistics', query })
}


// 开奖公告
const lotteryLotteryTypeDrawApi = {
    createDigitalDrawAnnouncement, createSportsDrawAnnouncement, createSportsStatistics, deleteSportsStatistics, listDigitalDrawAnnouncement, listSportsDrawAnnouncement, listSportsStatistics
}

export default lotteryLotteryTypeDrawApi
