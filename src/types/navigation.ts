import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Asset, useAssets } from "expo-asset";
export type StackParamList = {
  Menu: undefined;
  Rules: undefined;
  Game: undefined;
  Guess: undefined;
  Prediction: {
    assets?: Asset;
  };
};

export type MenuScreen = NativeStackScreenProps<StackParamList, "Menu">;
export type RulesScreen = NativeStackScreenProps<StackParamList, "Rules">;
export type GameScreen = NativeStackScreenProps<StackParamList, "Game">;
export type PredictionScreen = NativeStackScreenProps<StackParamList, "Prediction">;