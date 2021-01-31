import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import settings from "../settings.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecenterButton = ({ onPress, visible }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root} opacity={visible ? 1 : 0}>
        <MaterialCommunityIcons
          name="target-account"
          size={35}
          color={settings.colors.off_white}
        />
      </View>
    </Pressable>
  );
};

RecenterButton.defaultProps = {
  visible: true,
};

export default RecenterButton;

const styles = StyleSheet.create({
  root: {
    // appearence
    backgroundColor: settings.colors.blue,
    width: 67,
    height: 67,

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
