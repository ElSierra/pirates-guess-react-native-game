import Menu from "@/screens/Menu";
import { StackParamList } from "../types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<StackParamList>();
export const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Rules" component={Menu} />
    </Stack.Navigator>
  );
};
