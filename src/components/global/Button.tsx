import { View, Text, Animated, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "expo-image";
import { Audio } from "expo-av";
export default function Button({
  text,
  onPress,
  height = 100,
}: {
  text: string;
  onPress: () => void;
  height?: number;
}) {
  const [scaleValue] = useState(new Animated.Value(1));
  const handlePressIn = () => {
    playSound();
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/button.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
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


  return (
    <Animated.View
      style={{ width: "100%", padding: 20, transform: [{ scale: scaleValue }] }}
    >
      <Pressable onPressIn={handlePressIn} onPress={onPress} onPressOut={handlePressOut}>
        <ImageBackground
          source={require("@/assets/images/button.png")}
          contentFit="fill"
          style={{
            height,

            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.paragraph]}>{text}</Text>
        </ImageBackground>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 50,
    color: "#E6780B",
    fontFamily: "breathFire",
    textShadowColor: "#0a3255",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  abs: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
