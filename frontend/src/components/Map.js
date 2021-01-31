import React, { useContext } from "react";
import MapView, {
  Circle,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import settings from "../settings.json";
import map_style from "../components/mapstyle.json";

const IconMarker = ({ coord, icon }) => {
  if (coord == null) return null;
  return (
    <Marker coordinate={coord}>
      <FontAwesome5
        name={icon}
        size={45}
        color={settings.colors.blue}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 1,

          elevation: 6,
        }}
      />
    </Marker>
  );
};

const Map = ({ onPan, mapRef, position, targetData }) => {
  return (
    <>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.root}
        customMapStyle={map_style}
        onPanDrag={onPan}
      >
        {targetData && (
          <>
            <IconMarker coord={targetData.location} icon="flag-checkered" />
            {/* <Circle center={position} radius={targetData.radius} /> */}
            <Polyline
              coordinates={targetData.steps}
              strokeWidth={6}
              lineCap="round"
              lineJoin="bevel"
              strokeColor={settings.colors.blue}
            />
            {/* <Polyline
              coordinates={targetData.steps}
              strokeWidth={3}
              strokeColor="rgba(0,0,0,0.2)"
            /> */}
          </>
        )}
        <IconMarker coord={position} icon="walking" />
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
