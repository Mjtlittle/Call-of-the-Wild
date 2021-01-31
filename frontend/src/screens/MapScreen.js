import React from "react";
import Navbar from "../components/Navbar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Map from "../components/Map";
import RandomButton from "../components/RandomButton";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <RandomButton />
      <Navbar />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  map: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
