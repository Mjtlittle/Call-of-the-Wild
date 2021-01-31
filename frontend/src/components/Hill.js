import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';
import { Foundation } from '@expo/vector-icons';

const Hill = () => {
  return <View style={styles.circle} />;
};

export default Hill;

const styles = StyleSheet.create({
  circle: {
    width: 750,
    height: 750,
    borderRadius: 750 / 2,
    backgroundColor: settings.colors.primary,
  },
});
