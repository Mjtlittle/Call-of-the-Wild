import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "./src/screens/MapScreen";
import StreakScreen from "./src/screens/StreakScreen";

import { LocationProvider } from "./src/contexts/LocationContext";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
    <LocationProvider>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              //animationEnabled: false,
              cardStyleInterpolator: forFade,
            }}
          >
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="StreakScreen" component={StreakScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </LocationProvider>
  );
}
