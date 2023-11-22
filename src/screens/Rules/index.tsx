import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ImageBackground, Image } from "expo-image";
import Button from "@/components/global/Button";

const { height, width } = Dimensions.get("window");

export default function Rules() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={require("@/assets/images/eeeee.png")}
        contentFit="contain"
        style={{ width: "100%", height: 100, marginTop: 50 }}
      />
      <View>
        <ImageBackground
          source={require("@/assets/images/scroll.png")}
          contentFit="fill"
          style={{
            height: "60%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ padding: 50, gap: 10 }}>
            <Text style={{ fontFamily: "pung", fontSize: 20 }}>
              1. Think of any two-digit number.
            </Text>
            <Text style={{ fontFamily: "pung", fontSize: 20 }}>
              2. Subtract from it constituents its numbers. (eg, the number 63
              necessary to subtract 6 and 3, you get 54)
            </Text>
            <Text style={{ fontFamily: "pung", fontSize: 20 }}>
              3. Find this number in the table and the symbol to which it
              corresponds.
            </Text>
          </View>
        </ImageBackground>
        <Button height={70} text="Go"/>
      </View>
      
    </View>
  );
}
