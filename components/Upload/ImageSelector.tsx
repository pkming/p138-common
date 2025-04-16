import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,

  StyleProp,
  ViewStyle,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import CustomModal from "p138-common/components/modal";
import { kScreenWidth } from "src/utils";
import { useUserStore } from "src/store";
import { userUpdateBasicInfoApi } from "src/api/interface/auth";
import { getImageFromOss, uploadToOss } from "p138-common/utils/upload";
import OSSImage from "./OSSImage";
import { ImageProps, ImageStyle, Image } from "expo-image";

interface ImageUploadItemProps {
  label?: string; // 上传项的标题
  source?: ImageProps["source"];
  defaultImage?: ImageProps["source"];
  onImagePicked?: (uri?: string) => void; // 回调上传的图片 URI
  // uploadCategory?: "shopLogo" | "shopNotice" | "shopBanner"| 'avatar'| 'certification'; // 上传类型
  previewImageClassName?: string;
  previewImageStyle?: StyleProp<ImageStyle>;
  previewImageProps?: ImageProps;
  uploadButtonClassName?: string;
  uploadButtonStyle?: StyleProp<ViewStyle>;
  containerClassName?: string;
  containerStyle?: StyleProp<ViewStyle>;
  showClearButton?: boolean;
  canModify?: boolean;
}

const ImageUpload: React.FC<ImageUploadItemProps> = ({
  label='',
  source,
  defaultImage,
  previewImageClassName,
  previewImageStyle,
  uploadButtonClassName,
  uploadButtonStyle,
  previewImageProps,
  containerClassName,
  containerStyle,
  onImagePicked,
  showClearButton = false,
  canModify = true,
}) => {
  const [imageUri, setImageUri] = useState<ImageProps["source"]>(source??defaultImage);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewModalVisible, setIsPreviewModalVisible] = useState(false);
  const { loginInfo, setUserInfo, userInfo } = useUserStore();
  useEffect(()=>{
    setImageUri(source??defaultImage);
  },[source,defaultImage])
  const updateImgage = async (imageInfo: ImagePicker.ImagePickerAsset) => {
    const fileName = await uploadToOss(imageInfo, loginInfo);

    if (fileName) {
      
      setImageUri({uri:imageInfo.uri});
      userUpdateBasicInfoApi(
        {
          avatar: fileName,
        },
        {
          userID: loginInfo?.userID,
        },
        {
          "X-Shop-Code": loginInfo?.shopCode ?? 0,
          "X-User-Type": loginInfo?.userType,
          "X-Username": loginInfo?.username,
        }
      ).then((res) => {
        res.data &&
          setUserInfo({
            ...userInfo,
            avatar: res.data?.avatar,
          });
        onImagePicked && onImagePicked(res.data?.avatar);
      });

    }
  };


  // 打开相册选择图片
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      updateImgage(result.assets[0]);

      setIsModalVisible(false); // 关闭模态框
    }
  };

  // 打开相机拍照
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      updateImgage(result.assets[0]);
      setIsModalVisible(false); // 关闭模态框
    }
  };

  // 删除图片
  const deleteImage = () => {
    setImageUri(null);
    if (onImagePicked) {
      onImagePicked(undefined); // 调用回调函数删除图片
    }
  };
  return (
    <View>
      <TouchableOpacity
        // className={`border-2 border-blue-500 rounded-lg items-center justify-center w-36 h-28 mx-2 bg-white ${containerClassName}`}
        className={`${containerClassName}`}
        style={containerStyle}
        onPress={() => setIsModalVisible(true)}
      >
        {imageUri ? (
          <TouchableOpacity
            onPress={() => {
              if (canModify) {
                setIsModalVisible(true);
              } else {
                setIsPreviewModalVisible(true);
              }
            }}
            className={previewImageClassName}
          >
            <OSSImage
              source={imageUri}
              className="w-36 h-28 rounded-lg"
              resizeMode="contain"
              style={previewImageStyle}
              {...previewImageProps}
            />
            {/* 删除按钮 */}
            {showClearButton && (
              <TouchableOpacity
                className="absolute top-1 right-1 z-10"
                onPress={deleteImage}
              >
                <Ionicons name="close-circle" size={30} color="red" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ) : (
          <View
            className={`items-center justify-center ${uploadButtonClassName}`}
            style={uploadButtonStyle}
          >
            <Ionicons name="camera" size={40} color="#007BFF" />
            <Text className="mt-2 text-blue-500 text-sm">{label}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* 底部弹框 */}
      <CustomModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        position="bottom"
      >
        <View
          style={{ width: kScreenWidth }}
          className="bg-[#f0f0f0] rounded-lg items-center h-48 w-full justify-between overflow-hidden"
        >
          <View style={{ width: "100%" }} className="w-full bg-white">
            <TouchableOpacity
              className="py-3 px-4 border-b border-gray-300 w-full items-center justify-center"
              style={{
                width: "100%",
              }}
              onPress={pickImageFromGallery}
            >
              <Text className="text-lg">从相册选择</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3 px-4 border-b border-gray-300 w-full items-center justify-center"
              onPress={takePhoto}
            >
              <Text className="text-lg">拍照上传</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="py-4 px-4 w-full items-center justify-center bg-white"
            onPress={() => setIsModalVisible(false)}
          >
            <Text className="text-lg">取消</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>

      {/* 图片预览模态框 */}
      <CustomModal
        isVisible={isPreviewModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          className="bg-white rounded-lg p-5 relative w-full h-full"
          onPress={() => setIsPreviewModalVisible(false)}
        >
          <Image
            source={{ uri: imageUri! }}
            className="w-full h-full rounded-lg"
          />
        </TouchableOpacity>
      </CustomModal>
    </View>
  );
};

export default ImageUpload;
