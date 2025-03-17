import * as Updates from "expo-updates";
export const checkForUpdates = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync() 
    }else{
      console.error('没有更新')
    }
  } catch (error) {
    console.error("更新检查失败:", error);
  }
};
