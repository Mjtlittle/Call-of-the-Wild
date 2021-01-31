import React, { useContext, useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { LocationContext } from "../contexts/LocationContext";
import settings from "../settings.json";

import Navbar from "../components/Navbar";
import Map from "../components/Map";
import RandomButton from "../components/RandomButton";
import RecenterButton from "../components/RecenterButton";

const MapScreen = () => {
  const context = useContext(LocationContext);

  // hideing and showing the recenter button
  const [showRecenter, setShowRecenter] = useState(false);
  const handle_pan = () => setShowRecenter(true);

  // pull target location from local storage if exists on start
  const [targetData, _setTargetData] = useState(null);
  useEffect(() => {
    (async () => {
      // retrieve the stored target
      const stored_target_string = await AsyncStorage.getItem(
        settings.keys.target_location
      );
      const stored_target = JSON.parse(stored_target_string);

      // value is null if undefined
      _setTargetData(stored_target === null ? null : stored_target);
    })();
  }, []);

  // save target location to local storage and state
  const updateTargetData = (data) => {
    _setTargetData(data);
    AsyncStorage.setItem(
      settings.keys.target_location,
      JSON.stringify(data)
    ).catch(() => {});
  };

  // check to see if the user has hit the target
  //useEffect(() => {}, [context.location]);

  const setRandomLocation = async () => {
    console.log("started");
    const response = await fetch("http://130.127.78.14:8080/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: context.getCoords(),
      }),
    });

    const json = await response.json();

    updateTargetData(json);
  };

  // for recentering the map
  const mapRef = useRef(null);
  const center_map = () => {
    setShowRecenter(false);
    mapRef.current.animateCamera(
      {
        center: context.getCoords(),
        pitch: 2,
        heading: 20,
        altitude: 200,

        zoom: 18,
      },
      1
    );
  };

  // center a second after starting
  useEffect(() => {
    setTimeout(center_map, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Map
        mapRef={mapRef}
        onPan={handle_pan}
        position={context.getCoords()}
        targetData={targetData}
      />
      <View style={styles.overlay}>
        <RecenterButton onPress={center_map} visible={showRecenter} />
        <RandomButton onPress={setRandomLocation} />
      </View>
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
  overlay: {
    position: "absolute",
    bottom: 120,
    left: 0,
    width: Dimensions.get("window").width,

    justifyContent: "space-between",

    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row",
  },
});
