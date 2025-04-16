
interface UploadResponse {
  success: boolean;
  data?: {
    data: string;
    error: object;
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
export const uriToFile = async (file: any): Promise<File> => {
  const response = await fetch(file.uri);
    const blob = await response.blob();
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const filename =
      file.fileName ||
      `upload_${timestamp}_${randomStr}.${blob.type.split('/')[1]}`;
    return new File([blob], filename, {type: blob.type});
};

/**
 * 文件上传方法
 * @param file 文件对象，可以是 File、FormData 或 URI 字符串
 * @param onProgress 上传进度回调
 * @returns Promise<UploadResponse>
 */
export const uploadFile = async (
  fileInfos?: any,
  onProgress?: (progress: number) => void,
): Promise<UploadResponse> => {
  if (!fileInfos) {
    message.error('文件信息不能为空');
    return {
      success: false,
      message: '文件信息不能为空',
    };
  }
  try {
    const formData = new FormData();
    console.log(fileInfos.file)
    formData.append('file', fileInfos.file.originFileObj);
    formData.append('userID', fileInfos.userId);

    const uploadUrl = env.BASEURL + '/api/v1/upload';

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
      // 不要设置Content-Type，让浏览器自动设置

    });
    if (response.ok) {
      message.success('上传成功');
    } else {
      const errorData = await response.json();
      message.error(errorData.message || '上传失败');
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
