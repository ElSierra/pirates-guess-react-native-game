import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Menu: undefined;
  Rules: undefined;
  Game: undefined;
  Guess: undefined;
};

export type MenuScreen = NativeStackScreenProps<StackParamList, "Menu">;