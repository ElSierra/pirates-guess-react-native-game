import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { MainApp } from "@/navigation/Main";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    lato: require("@/assets/fonts/Lato-Regular.ttf"),
    latoBold: require("@/assets/fonts/Lato-Bold.ttf"),
    latoLight: require("@/assets/fonts/Lato-Light.ttf"),
    latoThin: require("@/assets/fonts/Lato-Thin.ttf"),
  });
  const onLoaded = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLoaded}>
      <StatusBar style="light" />
      <MainApp />
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
