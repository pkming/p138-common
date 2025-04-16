import {Platform} from 'react-native';
import {ImagePickerAsset} from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';
import { getOssAuthInfo } from "src/api/interface/oss";
import OSS from "ali-oss";

interface CustomFile extends File {
  uri?: string;
  buffer?: Buffer;
}

// OSS 客户端单例
class OssClient {
  private static instance: OssClient | null = null;
  private client: OSS | null = null;
  private authInfo: any = null;
  private lastAuthTime: number = 0;
  private readonly AUTH_EXPIRE_TIME = 30 * 60 * 1000; // 30分钟

  private constructor() {}

  static getInstance(): OssClient {
    if (!this.instance) {
      this.instance = new OssClient();
    }
    return this.instance;
  }

  private async initClient(): Promise<OSS> {
    // 检查是否需要重新获取授权
    const now = Date.now();
    if (!this.client || !this.authInfo || (now - this.lastAuthTime > this.AUTH_EXPIRE_TIME)) {
      const res = await getOssAuthInfo({
        ossVendor: "aliyun",
      });
      
      if (!res.data) {
        throw new Error("获取 OSS 授权信息失败");
      }

      this.authInfo = res.data;
      this.lastAuthTime = now;
      
      this.client = new OSS({
        region: this.authInfo.region,
        accessKeyId: this.authInfo.accessKeyID,
        accessKeySecret: this.authInfo.accessKeySecret,
        stsToken: this.authInfo.securityToken,
        bucket: "liangzai-dev-p138",
        secure: true,
        timeout: 60000,
        cname: false,
      });
    }

    return this.client;
  }

  private async uriToFile(file: ImagePickerAsset): Promise<CustomFile> {
    if (Platform.OS === 'web') {
      // Web 平台：转换为 File 对象
      const response = await fetch(file.uri);
      const blob = await response.blob();
      const timestamp = new Date().getTime();
      const randomStr = Math.random().toString(36).substring(2, 8);
      const filename = file.fileName || `upload_${timestamp}_${randomStr}.${blob.type.split('/')[1]}`;
      return new File([blob], filename, { type: blob.type }) as CustomFile;
    } else {
      // 移动端：使用 Expo FileSystem
      const asset = file;
      const uri = asset.uri;
      const mimeType = asset.mimeType || 'application/octet-stream';
      const ext = mimeType.split('/')[1] || 'jpg';
      const filename = asset.fileName || `upload_${Date.now()}.${ext}`;
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const buffer = Buffer.from(base64, 'base64');
      return {
        uri,
        name: filename,
        type: mimeType,
        lastModified: new Date().getTime(),
        size: base64.length,
        buffer,
      } as CustomFile;
    }
  }

  async upload(file: ImagePickerAsset, loginInfo: { userID: string }): Promise<string|null> {
    const client = await this.initClient();
    
    const uploadPath = loginInfo?.userID + "/";
    const fileName = uploadPath + (file.fileName || `upload_${Date.now()}.${file.mimeType?.split('/')[1] || 'jpg'}`);
    const mimeType = file.mimeType || "application/octet-stream";

    const options = {
      headers: {
        "Content-Type": mimeType,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, HEAD",
      },
    };

    const fileObj = await this.uriToFile(file);
    let result;

    if (Platform.OS === "web") {
      result = await client.put(fileName, fileObj, options);
    } else {
      if (!fileObj.buffer) {
        throw new Error("文件转换失败");
      
      }
      result = await client.put(fileName, fileObj.buffer, options);
    }

    if (!result.url) {
      throw new Error("上传失败：未获取到文件URL");
    }

    return result?fileName:null;
  }
  /**从OSS获取图片Base64
   * @param fileName 文件名
   * @returns 图片Base64
  */
  async getImage(fileName: string): Promise<string> {
    const client = await this.initClient();
    const result = await client.get(fileName);
    const base64 = result.content.toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  }
}

// 导出单例实例
export const ossClient = OssClient.getInstance();

// 导出上传方法
export const uploadToOss = async (
  file: ImagePickerAsset,
  loginInfo: { userID: string }
): Promise<string> => {
  return ossClient.upload(file, loginInfo);
};
export const getImageFromOss = async (
  fileName: string,
): Promise<string> => {
  return ossClient.getImage(fileName);
};
export default {
  uploadToOss,
  getImageFromOss
};