import axios from 'axios';
import {env} from 'src/api/config';
import {Platform} from 'react-native';
import {ImagePickerAsset} from 'expo-image-picker';

interface UploadResponse {
  success: boolean;
  data?: {
    data: string;
    error: Object;
    requestId: string;
    success: boolean;
  };
  message?: string;
}

/**
 * 将 URI 转换为适合上传的格式
 * @param file 图片 URI
 * @returns Promise<File | FormData>
 */
export const uriToFile = async (file: ImagePickerAsset): Promise<File> => {
  if (Platform.OS === 'web') {
    // Web 平台：转换为 File 对象
    const response = await fetch(file.uri);
    const blob = await response.blob();
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const filename =
      file.fileName ||
      `upload_${timestamp}_${randomStr}.${blob.type.split('/')[1]}`;
    return new File([blob], filename, {type: blob.type});
  } else {
    // 移动端：创建 FormData 并添加文件

    return Promise.resolve({
      uri: file.uri,
      name: file.fileName || `upload_${Date.now()}.jpg`,
      type: file.mimeType || 'image/jpeg',
    } as any);
  }
};

/**
 * 文件上传方法
 * @param file 文件对象，可以是 File、FormData 或 URI 字符串
 * @param onProgress 上传进度回调
 * @returns Promise<UploadResponse>
 */
export const uploadFile = async (
  fileInfos?: ImagePickerAsset & {userId: string},
  onProgress?: (progress: number) => void,
): Promise<UploadResponse> => {
  if (!fileInfos) {
    Toast.show('文件信息不能为空');
    return {
      success: false,
      message: '文件信息不能为空',
    };
  }
  try {
    const formData = new FormData();
    const file = await uriToFile(fileInfos);
    formData.append('file', file);
    formData.append('userID', fileInfos.userId);

    const uploadUrl = env.BASEURL + '/api/v1/upload';

    if (Platform.OS === 'web') {
      // Web 平台使用 axios
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
        timeout: 30000,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        transformRequest: (data, headers) => {
          delete headers['Content-Type'];
          return data;
        },
        onUploadProgress: progressEvent => {
          if (onProgress && progressEvent.total) {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            onProgress(progress);
          }
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } else {
      // Android 平台使用 fetch
      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const result = await response.json();

      return {
        success: true,
        data: result,
      };
    }
  } catch (error) {
    console.error('文件上传失败:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });

    return {
      success: false,
      message: error instanceof Error ? error.message : '文件上传失败',
    };
  }
};

/**
 * 图片上传方法
 * @param file 图片文件
 * @param onProgress 上传进度回调
 * @returns Promise<UploadResponse>
 */
export const uploadImage = async (
  file: File | string,
  onProgress?: (progress: number) => void,
): Promise<UploadResponse> => {
  // 检查文件类型
  if (typeof file !== 'string' && !file.type.startsWith('image/')) {
    return {
      success: false,
      message: '请上传图片文件',
    };
  }

  return uploadFile(file, onProgress);
};

/**
 * 视频上传方法
 * @param file 视频文件
 * @param onProgress 上传进度回调
 * @returns Promise<UploadResponse>
 */
export const uploadVideo = async (
  file: File | string,
  onProgress?: (progress: number) => void,
): Promise<UploadResponse> => {
  // 检查文件类型
  if (typeof file !== 'string' && !file.type.startsWith('video/')) {
    return {
      success: false,
      message: '请上传视频文件',
    };
  }

  return uploadFile(file, onProgress);
};

/**
 * 多文件上传方法
 * @param files 文件数组
 * @param onProgress 上传进度回调
 * @returns Promise<UploadResponse[]>
 */
export const uploadMultipleFiles = async (
  files: (File | string)[],
  onProgress?: (progress: number) => void,
): Promise<UploadResponse[]> => {
  const uploadPromises = files.map(file => uploadFile(file, onProgress));
  return Promise.all(uploadPromises);
};
