import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { MainApp } from "@/navigation/Main";
import { ImageBackground, ImageSource } from "expo-image";
import { Asset, useAssets } from "expo-asset";
import { useMusicStore } from "@/zustand/store";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [assets, error] = useAssets([require("@/assets/images/bg.webp")]);
  const [fontsLoaded, fontError] = useFonts({
    breathFire: require("@/assets/fonts/BreatheFire.otf"),
    luckiestGuy: require("@/assets/fonts/LuckiestGuy-Regular.ttf"),
    pung: require("@/assets/fonts/pong-game.otf"),
    poppins: require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
    lato: require("@/assets/fonts/Lato-Regular.ttf"),
    latoBold: require("@/assets/fonts/Lato-Bold.ttf"),
    latoLight: require("@/assets/fonts/Lato-Light.ttf"),
    latoThin: require("@/assets/fonts/Lato-Thin.ttf"),
  });
  const onLoaded = useCallback(async () => {
    if ((fontsLoaded && assets) || fontError) {
      console.log(
        "🚀 ~ file: App.tsx:19 ~ onLoaded ~ fontsLoaded:",
        fontsLoaded
      );
      setTimeout(async() => {
      await SplashScreen.hideAsync();}, 1000);
    }
  }, [fontsLoaded, fontError, assets]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLoaded}>
      <StatusBar style="light" />
      {assets && (
        <ImageBackground style={{ flex: 1 }} source={assets[0] as ImageSource}>
          <MainApp />
        </ImageBackground>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
