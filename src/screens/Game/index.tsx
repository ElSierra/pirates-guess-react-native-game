import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { ImageBackground } from "expo-image";
import Symbol from "@/components/Game/Symbol";
import Button from "@/components/global/Button";
import { Asset, useAssets } from "expo-asset";
import { useFocusEffect } from "@react-navigation/native";
import { GameScreen } from "@/types/navigation";
const data: Array<number> = [];

for (let i = 1; i <= 100; i++) {
  data.push(i + 1);
}

export default function Game({ navigation }: GameScreen) {
  const [assets, error] = useAssets([
    require("@/assets/symbols/1.svg"),
    require("@/assets/symbols/2.svg"),
    require("@/assets/symbols/3.svg"),
    require("@/assets/symbols/4.svg"),
    require("@/assets/symbols/5.svg"),
    require("@/assets/symbols/6.svg"),
    require("@/assets/symbols/7.svg"),
    require("@/assets/symbols/8.svg"),
    require("@/assets/symbols/9.svg"),
    require("@/assets/symbols/10.svg"),
    require("@/assets/symbols/11.svg"),
    require("@/assets/symbols/12.svg"),
    require("@/assets/symbols/13.svg"),
    require("@/assets/symbols/14.svg"),
    require("@/assets/symbols/15.svg"),
    require("@/assets/symbols/16.svg"),
    require("@/assets/symbols/17.svg"),
    require("@/assets/symbols/18.svg"),
    require("@/assets/symbols/19.svg"),
    require("@/assets/symbols/20.svg"),
    require("@/assets/symbols/21.svg"),
    require("@/assets/symbols/22.svg"),
    require("@/assets/symbols/23.svg"),
    require("@/assets/symbols/24.svg"),
    require("@/assets/symbols/25.svg"),
  ]);
  const [randomNumber, setRandomNumber] = useState(0);
  useFocusEffect(
    useCallback(() => {
      setRandomNumber(Math.floor(Math.random() * 24 + 1));
    }, [])
  );
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={require("@/assets/images/bg-paper.png")}
        contentFit="cover"
        style={{ height: "80%", width: "100%" }}
      >
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
                assets={assets}
                number={index}
                selectedNumber={randomNumber}
              />
            )}
          />
        </View>
      </ImageBackground>
      <Button
        text="Reveal"
        onPress={() =>
          navigation.navigate("Prediction", { assets: assets[randomNumber]  })
        }
      />
    </View>
  );
}
