import React from "react";
import { navigateTo, pxTransform } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default () => {
  const items: number[] = [];

  for (let i = 0; i < 30; i++) {
    items.push(i);
  }

  return (
    <View>
      <Text>首页!</Text>
      {items.map((i) => {
        return (
          <View
            key={`item-${i}`}
            style={{
              background: "#ccc",
              marginBottom: pxTransform(10, 750),
              height: pxTransform(100, 750),
            }}
            onClick={() => {
              navigateTo({
                url: "/pages/detail/index?id=" + i,
              });
            }}
          >
            点击进入详情页 {i}
          </View>
        );
      })}
    </View>
  );
};
