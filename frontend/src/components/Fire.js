import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';

const Fire = () => {
  return (
    <View style={styles.fire}>
      <SimpleLineIcons name="fire" size={100} color={settings.colors.red} />
    </View>
  );
};

export default Fire;

const styles = StyleSheet.create({
  fire: {
    shadowColor: settings.colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
