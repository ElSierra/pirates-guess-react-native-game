import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function LottieAsset() {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: 400,
        
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@/assets/lottie/pirate.json")}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
   
    alignItems: "center",
    justifyContent: "center",
  
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
