import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import settings from "../settings.json";
import { LinearGradient } from "expo-linear-gradient";
import Trees from "../components/Trees";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <LinearGradient
        colors={[settings.colors.primary, settings.colors.dark_secondary]}
        style={styles.linearGradient}
      />

      <View style={styles.tree}>
        <Trees color={settings.colors.white} />
      </View>
      <View>
        <Text style={styles.title}>Call of the Wild</Text>
        <Text style={styles.quote}>
          "A taste for the beautiful is most cultivated{"\n"} out of doors{"\n"}
          {"\n"}- Henry David Thoreau"
        </Text>
      </View>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height,
  },
  tree: {
    position: "absolute",
    marginTop: Dimensions.get("window").height * 0.25,
    left: Dimensions.get("window").width * 0.3,
  },
  title: {
    position: "absolute",
    marginTop: Dimensions.get("window").height * 0.5,
    left: Dimensions.get("window").width * 0.15,
    color: settings.colors.white,
    fontFamily: "Avenir-Roman",
    fontSize: 35,
    fontWeight: "bold",
  },
  quote: {
    position: "absolute",
    color: settings.colors.white,
    fontFamily: "Avenir-Roman",
    marginTop: Dimensions.get("window").height * 0.6,
    left: Dimensions.get("window").width * 0.1,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
