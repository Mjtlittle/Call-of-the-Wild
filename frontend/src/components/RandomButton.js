import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import settings from "../settings.json";

const RandomButton = () => {
  const [a, setA] = useState(0);

  return (
    <TouchableOpacity
      onPress={() => {
        setA(a + 1);
      }}
    >
      <View style={styles.root}></View>
    </TouchableOpacity>
  );
};

export default RandomButton;

const styles = StyleSheet.create({
  root: {
    position: "absolute",

    width: 67,
    height: 67,

    bottom: settings.navbar_height + 20,
    right: 20,

    borderRadius: 75,
    shadowRadius: 2,
    shadowColor: "#000",

    shadowOffset: {
      x: 30,
    },
    backgroundColor: settings.colors.dark_secondary,
  },
});
