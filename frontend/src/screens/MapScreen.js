import React, { useContext, useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LocationContext } from '../contexts/LocationContext';

import Map from '../components/Map';
import RandomButton from '../components/RandomButton';
import RecenterButton from '../components/RecenterButton';

const MapScreen = () => {
  const context = useContext(LocationContext);

  const [showRecenter, setShowRecenter] = useState(false);

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
      1,
    );
  };

  const handle_pan = () => setShowRecenter(true);
  useEffect(() => {
    setTimeout(center_map, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Map mapRef={mapRef} onPan={handle_pan} position={context.getCoords()} />
      <View style={styles.overlay}>
        {/*
          if we ever want the button to disappear when centered
          <RecenterButton onPress={center_map} visible={showRecenter} />
        */}
        <RecenterButton onPress={center_map} />
        <RandomButton />
      </View>
      <Navbar />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    width: Dimensions.get('window').width,

    justifyContent: 'space-between',

    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
  },
});
