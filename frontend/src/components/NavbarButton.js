import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import settings from "../settings.json";

const NavbarButton = ({ name, icon }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const visit_page = () => navigation.navigate(name);

  const active = route.name == name;

  return (
    <Pressable onPress={visit_page}>
      <View style={styles.root}>
        <SimpleLineIcons
          name={icon}
          size={32}
          color={active ? settings.colors.blue : settings.colors.black}
          style={
            active
              ? {
                  shadowColor: settings.colors.blue,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.9,
                  shadowRadius: 4,
                  elevation: 4,
                }
              : {}
          }
        />
      </View>
    </Pressable>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 30,

    backgroundColor: "#F0EAD2",

    marginVertical: 10,
    width: 120,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    borderColor: "black",
    borderWidth: 1.5,
  },
});
