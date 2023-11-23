import Button from "@/components/global/Button";
import { PredictionScreen } from "@/types/navigation";
import { Image, ImageSource } from "expo-image";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Asset } from "expo-asset";
import { Audio } from "expo-av";

const Prediction = ({ navigation, route }: PredictionScreen) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/reveal.mp3")
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
  useEffect(() => {
    playSound();
  }, []);
  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      delay: 1000,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false, // Make sure to set this to false if you're using layout animations
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.revealView,
          {
            width: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      >
        <Image
          source={route.params.assets as ImageSource}
          contentFit="contain"
          style={{ height: "100%", width: "100%" }}
        />
      </Animated.View>
      <Button text="Play again" onPress={() => navigation.replace("Menu")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  revealView: {
    height: 400,

    width: 200,
  },
});

export default Prediction;
