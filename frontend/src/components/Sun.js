import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';

const Sun = () => {
  return <View style={styles.circle} />;
};

export default Sun;

const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: settings.colors.yellow,
  },
});
