import Menu from "@/screens/Menu";
import { StackParamList } from "../types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Rules from "@/screens/Rules";
import Game from "@/screens/Game";
import Prediction from "@/screens/Prediction";
import { useMusicStore } from "@/zustand/store";

const Stack = createNativeStackNavigator<StackParamList>();
export const MainApp = () => {
  const [sound, setSound] = useState<Audio.Sound>();
  const { musicOn} = useMusicStore();
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

  //function to stop the sound
  async function stopSound() {
    await sound?.stopAsync();
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
    if (musicOn) {
      playSound();
    } else {
      stopSound();
    }
  }, [musicOn]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "simple_push",
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Prediction" component={Prediction} />
    </Stack.Navigator>
  );
};
