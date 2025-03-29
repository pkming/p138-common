import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import {NativeModules} from 'react-native';
import {useToast} from 'p138-common/components/toast/ToastContext';
import dayjs from 'dayjs';
const {InstallAPK} = NativeModules;

const AppUpdateChecker = (props: {BaseURL: string}) => {
  const {BaseURL} = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentVersion, setCurrentVersion] = useState('');
  const downloadURL = BaseURL + '/download/138.apk';
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
        
        // 使用 FileSystem.documentDirectory 获取应用私有目录
        const downloadDest = `${FileSystem.documentDirectory}/138_${dayjs().valueOf()}.apk`;
        console.log('Download destination:', downloadDest);

        const downloadResumable = FileSystem.createDownloadResumable(
          downloadUrl,
          downloadDest,
          {},
          (downloadProgress) => {
            const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            setProgress(progress);
          }
        );

        const downInfo = await downloadResumable.downloadAsync();
        console.log('Download completed, file URI:', downInfo?.uri);
        
        if (downInfo?.uri) {
          setIsUpdating(false);
          
          // 检查文件是否存在
          const fileInfo = await FileSystem.getInfoAsync(downInfo?.uri);
          console.log('File info:', fileInfo);
          
          if (fileInfo.exists) {
            Alert.alert('下载完成', '点击安装更新', [
              {
                text: '安装',
                onPress: () => installApk(downInfo?.uri),
              },
            ]);
          } else {
            Alert.alert('错误', '下载文件不存在');
          }
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

  const installApk = async (filePath: string) => {
    try {
      /// 移除 file:// 前缀，因为原生模块需要的是实际文件路径
      const actualPath = filePath.replace('file://', '');
      console.log('Installing APK from:', actualPath);
      
      InstallAPK.installAPK(
        actualPath,
        (message: string) => {
          console.log('Install success:', message);
        },
        (error: string) => {
          console.error('Install failed:', error);
        }
      )
      // const canShare = await Sharing.isAvailableAsync();
      // if (canShare) {
      //   await Sharing.shareAsync(fileUri, {
      //     mimeType: 'application/vnd.android.package-archive',
      //     dialogTitle: '安装更新',
      //   });
      // } else {
      //   Alert.alert('错误', '无法安装更新');
      // }
    } catch (error) {
      console.error('安装失败', error);
      Alert.alert('安装失败', '请稍后再试');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>当前版本: {currentVersion}</Text>
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
