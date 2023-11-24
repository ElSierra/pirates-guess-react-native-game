import {
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground } from "expo-image";
import Symbol from "@/components/Game/Symbol";
import Button from "@/components/global/Button";
import { Asset, useAssets } from "expo-asset";
import { useFocusEffect } from "@react-navigation/native";
import { GameScreen } from "@/types/navigation";
import { useIconStore } from "@/zustand/store";
import LottieAsset from "@/components/Game/LottieAsset";
import { LinearGradient } from "expo-linear-gradient";
const data: Array<number> = [];
const { width } = Dimensions.get("window");
for (let i = 1; i <= 100; i++) {
  data.push(i + 1);
}

export default function Game({ navigation }: GameScreen) {
  const { iconAssets, setIconAssets } = useIconStore();

  const testAssets = [
    require("@/assets/symbols/1.png"),
    require("@/assets/symbols/2.png"),
    require("@/assets/symbols/3.png"),
    require("@/assets/symbols/4.png"),
    require("@/assets/symbols/5.png"),
    require("@/assets/symbols/6.png"),
    require("@/assets/symbols/8.png"),
    require("@/assets/symbols/10.png"),
    require("@/assets/symbols/11.png"),
    require("@/assets/symbols/12.png"),
    require("@/assets/symbols/13.png"),
    require("@/assets/symbols/14.png"),
    require("@/assets/symbols/15.png"),
    require("@/assets/symbols/17.png"),
    require("@/assets/symbols/18.png"),
    require("@/assets/symbols/19.png"),
    require("@/assets/symbols/20.png"),
    require("@/assets/symbols/23.png"),
  ];
  const [randomNumber, setRandomNumber] = useState(0);
  const [canRender, setCanRender] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setRandomNumber(Math.floor(Math.random() * 17 + 1));
    }, [])
  );
  useEffect(() => {
    setTimeout(() => setCanRender(true), 1000);
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: true,
    });

    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease,
      useNativeDriver: true,
    });

    const sequence = Animated.sequence([fadeIn, fadeOut]);

    Animated.loop(sequence).start();
  }, [fadeAnim]);
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
                  assets={testAssets}
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
            <Animated.Text
              style={{
                fontFamily: "breathFire",
                fontSize: width / 6,
                opacity: fadeAnim,
              }}
            >
              Generating...
            </Animated.Text>
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
