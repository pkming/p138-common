import React from "react";
import { Platform, View } from "react-native";
import WebView from "react-native-webview";

interface HtmlProps {
  html: string;
  // style?: StyleProp<ViewStyle>;
  imageUrl?: string;
}

export default function Html({ html, imageUrl }: HtmlProps) {
  if (!html) return null;
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {Platform.OS === "web" ? (
        <iframe
          srcDoc={`
      <style>
        body {
          margin: 0;
          padding: 10px;
          box-sizing: border-box;
          max-width: 100%;
          overflow-x: hidden;
          line-height: 1.5; /* 调整行高以控制文字间距 */
          font-size: 16px; /* 设置合适的字体大小 */
        }
          img {
            width: 100%;
            height: 100%;
            margin-top: 20px;
          }
      </style>
      ${html?.replace("http://", "https://")}
      ${imageUrl ? `<img src="${imageUrl}" />` : ""}
    `}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      ) : (
        // 在移动端使用 WebView
        <WebView
          textZoom={200}
          scrollEnabled={true}
          source={{
            html: `
        <style>
          body {
            margin: 0;
            padding: 10px;
            box-sizing: border-box;
            max-width: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            line-height: 1.5; /* 调整行高以控制文字间距 */
            font-size: 18px; /* 增大字体以提高可读性 */
          }
            img {
            width: 100%;
            height: 100%;
          }
        </style>
        ${html}
        ${imageUrl ? `<img src="${imageUrl}" />` : ""}
      `,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </View>
  );
}
