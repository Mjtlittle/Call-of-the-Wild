import React from 'react';
import Navbar from '../components/Navbar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Map from '../components/Map';
import RandomButton from '../components/RandomButton';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Map />
      <RandomButton />
      <View style={styles.overlay} pointerEvents="none"></View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
