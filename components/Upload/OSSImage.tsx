import { Image, ImageProps } from "expo-image";
import { DEFAULT_IMAGE } from "p138-common/config";
import { getImageFromOss } from "p138-common/utils/upload";
import React, { useEffect, useRef, useState } from "react";
import { Spinner, YStack } from "tamagui";

interface OSSImageProps {
  className?: string;
}

const OSSImage: React.FC<OSSImageProps & ImageProps> = ({
  className,
  ...props
}) => {
  const { source } = props;
  const [imageUriSource, setImageUriSource] = useState<ImageProps["source"]>();
  const [isLoading, setIsLoading] = useState(false);
  const prevSourceRef = useRef<ImageProps["source"]>();
  //   ImageSource | string | number | ImageSource[] | string[] | SharedRefType<'image'> | null
  const getImage = async (fileName: string) => {
    try {
      setIsLoading(true);
      const base64 = await getImageFromOss(fileName);
      setImageUriSource({ uri: base64 });
    } catch (error) {
      console.error("加载图片失败:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof source === "number") {
      if (prevSourceRef.current === source) {
        return;
      } else {
        prevSourceRef.current = source;
      }
      return;
    } else {
      if (prevSourceRef.current?.uri === source?.uri) {
        return;
      } else {
        prevSourceRef.current = source;
      }
    }

    if (!source) {
      setImageUriSource({ uri: DEFAULT_IMAGE });
      return;
    }
    if (typeof source === "number") {
      setImageUriSource(source);
      return;
    }
    if(typeof source === 'object'){

      const uri = source.uri;
      if (!uri) return;
     
      if ((source.width && source.height)){
        console.log(source, "======111======");
        setImageUriSource(source);
      }else if( uri.startsWith("http") || uri.startsWith("data:image")) {
        setImageUriSource({ uri });
      }else{
        getImage(uri);
      }
    }
    // 处理 require 导入的本地图片

    // 处理对象类型的 source
    const uri = source.uri;
    if (!uri) return;
    console.log(uri, "======1======");
    if (uri.startsWith("http") || uri.startsWith("data:image")) {
      setImageUriSource({ uri });
    } else {
      getImage(uri);
    }
  }, [source]);

  if (isLoading) {
    return (
      <YStack
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Spinner size="large" color="$red10" />
      </YStack>
    );
  }

  // 处理其他类型的图片
  return <Image {...props} className={className} source={imageUriSource} />;
};

export default OSSImage;
