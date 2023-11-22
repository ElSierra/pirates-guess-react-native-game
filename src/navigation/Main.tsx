import Menu from "@/screens/Menu";
import { StackParamList } from "../types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Rules from "@/screens/Rules";

const Stack = createNativeStackNavigator<StackParamList>();
export const MainApp = () => {
 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,animation:"flip",contentStyle:{backgroundColor:"transparent"}}}>
      
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Rules" component={Rules} />
    </Stack.Navigator>
  );
};
