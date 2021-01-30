import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <FontAwesome.Button
        title="map"
        name="map"
        color="black"
        style={styles.button}
        size={40}
        onPress={() => navigation.navigate('MapScreen')}
      ></FontAwesome.Button>
      <FontAwesome.Button
        title="streak"
        name="star"
        color="black"
        style={styles.button}
        size={40}
        onPress={() => navigation.navigate('StreakScreen')}
      ></FontAwesome.Button>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  root: {
    backgroundColor: settings.colors.dark_secondary,
    height: settings.navbar_height,
    width: Dimensions.get('window').width,

    // center children
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    // shadow
    elevation: 5,
    shadowColor: settings.colors.black,
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  button: {
    backgroundColor: '#F0EAD2',
    width: 120,
    height: 60,
    borderColor: 'black',
    borderWidth: 1.5,
  },
});
