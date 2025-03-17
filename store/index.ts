/**
 * 通用状态管理导出
 * 
 * 只导出通用的应用状态管理，项目特定状态已迁移至各项目
 */

// 导出应用状态管理
export * from './states';

// 注意：业务相关状态管理已迁移至各项目，不再从通用库导出
// 用户状态: src/store/user
// 彩票状态: src/store/lottery
// 关注状态: src/store/follow 