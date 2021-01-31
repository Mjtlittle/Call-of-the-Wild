import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';
import { Foundation } from '@expo/vector-icons';

const Tree = () => {
  return (
    <View style={styles.tree}>
      <Foundation
        title="trees"
        name="trees"
        color="#6C584C"
        size={180}
      ></Foundation>
    </View>
  );
};

export default Tree;

const styles = StyleSheet.create({
  tree: {
    position: 'absolute',
    marginTop: 225,
    left: 225,
  },
});
