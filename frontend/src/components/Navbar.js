import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import settings from "../settings.json";

const Navbar = () => {
  return (
    <View style={styles.root}>
      <Text></Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  root: {
    backgroundColor: settings.colors.dark_secondary,
    height: settings.navbar_height,
    width: Dimensions.get("window").width,

    // shadow
    elevation: 5,
    shadowColor: settings.colors.black,
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
});
