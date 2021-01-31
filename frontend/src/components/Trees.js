import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import settings from '../settings.json';
import { Foundation } from '@expo/vector-icons';

const Tree = (props) => {
  return (
    <View>
      <Foundation
        title="trees"
        name="trees"
        color={props.color}
        size={180}
      ></Foundation>
    </View>
  );
};

export default Tree;
