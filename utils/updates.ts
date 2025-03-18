import * as Updates from "expo-updates";



export const checkForUpdates = async () => {
  try {


    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      Toast.show('有更新')
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync() 

    }else{
      Toast.show('没有更新')
    }
  } catch (error) {
    console.error("更新检查失败:", error);
  }
};