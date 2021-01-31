import React from "react";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "./src/screens/MapScreen";
import StreakScreen from "./src/screens/StreakScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
        >
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="StreakScreen" component={StreakScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
