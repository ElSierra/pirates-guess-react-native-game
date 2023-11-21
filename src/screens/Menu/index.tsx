import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "expo-image";

export default function Menu() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("@/assets/images/bg.webp")}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#fff", fontSize: 40 }}>Menu</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
