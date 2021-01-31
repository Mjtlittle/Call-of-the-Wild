import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import settings from '../settings.json';
import { LinearGradient } from 'expo-linear-gradient';
import Sun from '../components/Sun';
import Hill from '../components/Hill';
import Trees from '../components/Trees';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, compareAsc } from 'date-fns';
import { endOfToday } from 'date-fns/esm';

// from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage/
const STORAGE_KEY = '@save_streak';

// track streak
// ---- 1) get today's date
const today = endOfToday();
// ---- 2) get last login date and record this login as the new lastLogin
// todo: get from local storage
// const lastLogin = endOfToday();
const StreakScreen = () => {
  const [streak, setStreak] = useState(0);

  const saveData = async () => {
    try {
      setStreak(streak + 1);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(streak + 1));
      // alert('Data successfully saved');
    } catch (e) {
      // alert('Failed to save the data to the storage', e);
      console.log('Failed to save the data to the storage');
    }
  };
  const readData = async () => {
    try {
      const userStreak = await AsyncStorage.getItem(STORAGE_KEY);
      if (userStreak !== null) {
        setStreak(JSON.parse(userStreak));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  // ---- 3) if last login was before yesterday, set streak to 0
  // ---- 4) if last login was yesterday, streak++
  // ---- 5) if last login date was today (aka 'else'), do nothing
  const today = endOfToday();

  // console.log('today', today);
  // console.log(compareDates(date, ['1', '30', '2021'])); // proof that comparedates works

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[settings.colors.white, settings.colors.off_white]}
        style={styles.linearGradient}
      />
      <View style={styles.sun} pointerEvents="none">
        <Sun />
      </View>
      <Button title="read streak" color="#f194ff" onPress={() => readData()}>
        read streak
      </Button>
      <Button
        title="increment streak"
        color="#f194ff"
        onPress={() => saveData()}
      >
        increment streak
      </Button>
      <View style={styles.hill} pointerEvents="none">
        <Hill />
      </View>
      <View pointerEvents="none">
        <Trees />
      </View>
      <Text style={styles.streak_text}>Your Streak is {streak}</Text>
      <View style={styles.content} pointerEvents="none"></View>
      <Navbar />
      <View style={styles.overlay} pointerEvents="none"></View>
    </View>
  );
};

export default StreakScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: settings.colors.off_white,
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
  content: {
    flexGrow: 1,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 175,
  },
  sun: {
    position: 'absolute',
    left: -120,
    top: -120,
  },
  hill: {
    position: 'absolute',
    bottom: -500,
    left: -100,
  },
  streak_text: {
    position: 'absolute',
    color: '#DDE5B6',
    fontSize: 35,
    fontWeight: 'bold',
    bottom: 125,
    left: 70,
  },
});
