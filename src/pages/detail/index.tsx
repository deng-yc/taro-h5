import React from "react";
import { View, Text } from "@tarojs/components";
import { pxTransform } from "@tarojs/taro";
import "./index.less";

export default () => {
  const items: number[] = [];

  for (let i = 0; i < 30; i++) {
    items.push(i);
  }

  return (
    <View>
      <Text>详情页!</Text>
      {items.map((i) => {
        return (
          <View
            key={`item-${i}`}
            style={{
              background: "#666",
              marginBottom: pxTransform(10, 750),
              height: pxTransform(100, 750),
            }}
          >
            详情 {i}
          </View>
        );
      })}
    </View>
  );
};
