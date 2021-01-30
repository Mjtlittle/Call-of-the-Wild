import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MapScreen from './src/screens/MapScreen';
import StreakScreen from './src/screens/StreakScreen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
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
