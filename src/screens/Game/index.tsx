import { View, Text, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground } from "expo-image";
import Symbol from "@/components/Game/Symbol";
import Button from "@/components/global/Button";
import { Asset, useAssets } from "expo-asset";
import { useFocusEffect } from "@react-navigation/native";
import { GameScreen } from "@/types/navigation";
import { useIconStore } from "@/zustand/store";
import LottieAsset from "@/components/Game/LottieAsset";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
const data: Array<number> = [];

for (let i = 1; i <= 100; i++) {
  data.push(i + 1);
}

export default function Game({ navigation }: GameScreen) {
  const { iconAssets, setIconAssets } = useIconStore();
  const [randomNumber, setRandomNumber] = useState(0);
  const [canRender, setCanRender] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setRandomNumber(Math.floor(Math.random() * 24 + 1));
    }, [])
  );
  useEffect(() => {
    if (iconAssets.length === 25) {
      setTimeout(() => setCanRender(true), 1000);
    }
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={require("@/assets/images/bg-paper.png")}
        contentFit="cover"
        style={{ height: "80%", width: "100%" }}
      >
        {canRender ? (
          <View style={{ paddingTop: 100, paddingBottom: 60, width: "100%" }}>
         
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              fadingEdgeLength={40}
              contentContainerStyle={{
                padding: 10,
              }}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              numColumns={4}
              renderItem={({ index }) => (
                <Symbol
                  assets={iconAssets}
                  number={index}
                  selectedNumber={randomNumber}
                />
              )}
            />
          </View>
        ) : (
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieAsset />
          </View>
        )}
      </ImageBackground>
      <Button
        text="Reveal"
        onPress={() =>
          navigation.navigate("Prediction", {
            assets: iconAssets[randomNumber],
          })
        }
      />
    </View>
  );
}
