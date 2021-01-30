import React from "react";
import MapView from "react-native-maps";

import { StyleSheet, Text, View, Dimensions } from "react-native";

const Map = () => {
  return <MapView style={styles.root} />;
};

export default Map;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    width: Dimensions.get("window").width,
  },
});
