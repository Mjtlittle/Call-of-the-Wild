import React, { useContext } from "react";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import settings from "../settings.json";
import map_style from "../components/mapstyle.json";

const Map = ({ onPan, mapRef, position, target }) => {
  return (
    <>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.root}
        customMapStyle={map_style}
        onPanDrag={onPan}
      >
        {target && (
          <Marker coordinate={target}>
            <FontAwesome5
              name="flag-checkered"
              size={35}
              color={settings.colors.blue}
            />
          </Marker>
        )}

        <Marker coordinate={position}>
          <FontAwesome5 name="walking" size={35} color={settings.colors.blue} />
        </Marker>
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    width: Dimensions.get("window").width,
  },
});
