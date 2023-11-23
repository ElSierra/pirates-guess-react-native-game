import { View, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground, Image } from "expo-image";
import Button from "@/components/global/Button";
import { Audio } from "expo-av";
import Title from "@/components/Menu/Title";
import { MenuScreen } from "@/types/navigation";
import { useMusicStore } from "@/zustand/store";

const { height, width } = Dimensions.get("window");
export default function Menu({ navigation }: MenuScreen) {
  const { musicOn, off, on } = useMusicStore();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("@/assets/images/pirate.png")}
          style={{ height: height / 2, width: "100%" }}
        />

        <Button text="Play" onPress={() => navigation.navigate("Rules")} />
        <Button
          text={`${musicOn ? "Disable" : "Enable"} Music`}
          onPress={() => {
            if (musicOn) {
              off();
            } else {
              on();
            }
          }}
        />
      </View>
    </ScrollView>
  );
}
