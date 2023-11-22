import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GradientText from "./GradientText";

export default function Title() {
  return (
    <View>
      <Text style={styles.paragraph}>Pirate's Guess</Text>
      <GradientText style={styles.paragraph}>Pirate's Guess</GradientText>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 50,
    
    color: "#b6f1f8",
    fontFamily: "luckiestGuy",
    textShadowColor: "#0a3255",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
