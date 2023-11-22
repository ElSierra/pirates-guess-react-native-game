import { View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground, Image } from "expo-image";
import Button from "@/components/global/Button";
import { Audio } from "expo-av";
import Title from "@/components/Menu/Title";
import { MenuScreen } from "@/types/navigation";

const { height, width } = Dimensions.get("window");
export default function Menu({ navigation }: MenuScreen) {
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/bg.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(() => {
    playSound();
  }, []);

  return (
    <View style={{ flex: 1 }}>
   
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("@/assets/images/pirate.png")}
            style={{ height: height / 2, width: "100%" }}
          />

          <Button text="Play" onPress={() => navigation.navigate("Rules")} />
          <Button text="SETTINGS" />
        </View>
     
    </View>
  );
}
