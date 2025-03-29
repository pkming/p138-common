import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import {NativeModules} from 'react-native';
const {InstallAPK} = NativeModules;

const AppUpdateChecker = (props: {BaseURL: string}) => {
  const {BaseURL} = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentVersion, setCurrentVersion] = useState('');
  const downloadURL = 'https://business-ui-p138-dev.lengz.cc/download/138_b.apk';
  useEffect(() => {
    // 获取当前应用版本
    const version = '1.0.0'; // 替换为实际的版本获取方法
    setCurrentVersion(version);
  }, []);

  // 假设你从服务器获取最新版本信息
  const checkForUpdate = async () => {
    try {
      // 模拟服务器返回的最新版本信息
      const response = {
        latestVersion: '2.0.0', // 最新版本
        downloadUrl: downloadURL + '?' + new Date().getTime(), // 下载链接
      };

      // 比较版本，如果有更新则提示下载
      if (response.latestVersion !== currentVersion) {
        Alert.alert(
          '有新版本可用',
          `当前版本: ${currentVersion}, 新版本: ${response.latestVersion}`,
          [
            {
              text: '取消',
              style: 'cancel',
            },
            {
              text: '下载更新',
              onPress: () => downloadUpdate(response.downloadUrl),
            },
          ],
        );
      } else {
        Alert.alert('没有更新', '你已是最新版本');
      }
    } catch (error) {
      console.error('检查更新失败', error);
      Alert.alert('错误', '检查更新失败，请稍后再试');
    }
  };

  const downloadUpdate = async (downloadUrl: string) => {
    if (Platform.OS === 'android') {
      try {
        setIsUpdating(true);
        const downloadDest = `${FileSystem.documentDirectory}app.apk`;
        
        const downloadResumable = FileSystem.createDownloadResumable(
          downloadUrl,
          downloadDest,
          {},
          (downloadProgress) => {
            const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            setProgress(progress);
          }
        );

        const dataUrl= await downloadResumable.downloadAsync();
        
        if (dataUrl?.uri) {
          setIsUpdating(false);
          Alert.alert('下载完成', '点击安装更新', [
            {
              text: '安装',
              onPress: () => installApk(dataUrl?.uri),
            },
          ]);
        }
      } catch (error) {
        console.error('下载失败', error);
        setIsUpdating(false);
        Alert.alert('下载失败', '请稍后再试');
      }
    } else {
      Alert.alert('iOS 更新', 'iOS 需要通过 App Store 更新');
    }
  };

  // const installApk = async (filePath: string) => {
  //   try {
  //     const canShare = await Sharing.isAvailableAsync();
  //     if (canShare) {
  //       await Sharing.shareAsync(filePath, {
  //         mimeType: 'application/vnd.android.package-archive',
  //         dialogTitle: '安装更新',
  //       });
  //     } else {
  //       Alert.alert('错误', '无法安装更新');
  //     }
  //   } catch (error) {
  //     console.error('安装失败', error);
  //     Alert.alert('安装失败', '请稍后再试');
  //   }
  // };
  const installApk = async (filePath: string) => {
    console.log('filePath', filePath);
    try {
      // 调用原生模块的安装方法
      InstallAPK.installAPK(
        filePath,
        (message: string) => {
          console.log('Install success:', message); // 安装成功的回调
        },
        (error: string) => {
          console.error('Install failed:', error); // 安装失败的回调
        },
      );
    } catch (error) {
      console.error('Error installing APK:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button 
        title="检查更新" 
        onPress={checkForUpdate}
        disabled={isUpdating}
      />
      {isUpdating && (
        <View style={{marginTop: 20}}>
          <Text>下载中... {Math.round(progress * 100)}%</Text>
        </View>
      )}
    </View>
  );
};

export default AppUpdateChecker;
