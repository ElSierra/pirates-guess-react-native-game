import { View, Text, Image } from "react-native";
import { ImageBackground, ImageSource } from "expo-image";
import { Asset, useAssets } from "expo-asset";
import React from "react";

function Symbol({
  number,
  assets,
  selectedNumber,
}: {
  number: number;
  assets?: Asset[];
  selectedNumber: number;
}) {
  //random number from 1 to 50

  const randomNumber: number = Math.floor(Math.random() * 17 + 1);
  console.log("🚀 ~ file: Symbol.tsx:7 ~ Symbol ~ randomNumber:", randomNumber);

  if (randomNumber) {
    return assets ? (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "pung", fontSize: 20, width: 20 }}>
          {number}
        </Text>

        <Image
          progressiveRenderingEnabled
          source={
            assets[
              number % 9 === 0 && number !== 0
                ? selectedNumber
                : number === 2 || number === 5 || number === 28
                ? randomNumber
                : randomNumber
            ] as ImageSource
          }
          style={{ height: 60, width: 60 }}
        />
      </View>
    ) : null;
  }
}

export default React.memo(Symbol);
