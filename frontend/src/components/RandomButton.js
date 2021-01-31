import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import settings from "../settings.json";
import { FontAwesome5 } from "@expo/vector-icons";
const RandomButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <FontAwesome5 name="dice" size={30} color={settings.colors.off_white} />
      </View>
    </Pressable>
  );
};

export default RandomButton;

const styles = StyleSheet.create({
  root: {
    // appearence
    backgroundColor: settings.colors.dark_secondary,
    width: 67,
    height: 67,

    // position
    position: "absolute",
    bottom: 30,
    right: 20,

    // shadow
    borderRadius: 75,
    shadowRadius: 3,
    shadowColor: settings.colors.black,
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.5,

    // flex
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
