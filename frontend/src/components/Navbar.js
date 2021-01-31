import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import settings from "../settings.json";

import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <View style={styles.root}>
      <View style={styles.button_container}>
        <NavbarButton name="MapScreen" icon="map" />
        <NavbarButton name="StreakScreen" icon="fire" />
      </View>
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
  button_container: {
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    height: settings.navbar_height - 15,
  },
});
