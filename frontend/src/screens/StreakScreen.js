import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Pressable,
} from 'react-native';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import settings from '../settings.json';
import { LinearGradient } from 'expo-linear-gradient';
import Sun from '../components/Sun';
import Hill from '../components/Hill';
import Trees from '../components/Trees';
import Fire from '../components/Fire';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, compareAsc } from 'date-fns';
import { endOfToday } from 'date-fns/esm';

// from https://blog.jscrambler.com/how-to-use-react-native-asyncstorage/
const STORAGE_KEY = '@save_streak';

// track streak
// -- get today's date
// -- get last login date and record this login as the new lastLogin
// todo: get from local storage
// const lastLogin = endOfToday();
const StreakScreen = () => {
  const [streak, setStreak] = useState(0);
  const [msg, setMsg] = useState(
    "You don't have a streak yet. Get started today!",
  );

  const saveData = async () => {
    try {
      setStreak(streak + 1);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(streak + 1));
    } catch (e) {
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
      console.log('Failed to fetch the data from storage');
    }
  };

  // if last login was before yesterday, set streak to 0
  // if last login was yesterday, streak++
  // if last login date was today (aka 'else'), do nothing
  // const today = endOfToday();
  // console.log(today);

  useEffect(() => {
    streak > 0 &&
      setMsg(`You're on a ${streak}-day streak!\n Congrats, keep on going!`);
  }, [streak]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[settings.colors.white, settings.colors.off_white]}
        style={styles.linearGradient}
      />

      <View style={styles.sun} pointerEvents="none">
        <Sun />
      </View>

      <View style={styles.hill} pointerEvents="none">
        <Hill />
      </View>

      <View style={styles.tree} pointerEvents="none">
        <Trees color={settings.colors.dark_secondary} />
      </View>

      <Pressable style={styles.fire} onPress={() => saveData()}>
        <Fire />
        <Text style={styles.counter}>{streak}</Text>
        <Text style={styles.msg}>{msg}</Text>
      </Pressable>

      <Text style={styles.streak_text}>Your Streak</Text>

      <View style={styles.content} pointerEvents="none"></View>
      {/* <Button title="read streak" color="#f194ff" onPress={() => readData()}>
        read streak
      </Button> */}

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
    height: Dimensions.get('window').width * 0.35,
  },
  streak_text: {
    position: 'absolute',
    color: settings.colors.off_white,
    fontFamily: 'Avenir-Roman',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: Dimensions.get('window').height * 0.73,
    left: Dimensions.get('window').width * 0.45,
  },
  sun: {
    position: 'absolute',
    left: Dimensions.get('window').width * -0.35,
    top: Dimensions.get('window').height * -0.15,
  },
  hill: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * -0.75,
    left: Dimensions.get('window').width * -0.29,
  },
  fire: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.2,
    left: Dimensions.get('window').width * 0.256,
    flexDirection: 'row',
  },
  tree: {
    position: 'absolute',
    marginTop: Dimensions.get('window').height * 0.45,
    left: Dimensions.get('window').width * 0.6,
  },
  counter: {
    fontSize: 80,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  msg: {
    fontFamily: 'Avenir-Roman',
    position: 'absolute',
    width: Dimensions.get('window').width / 1.8,
    textAlign: 'center',
    color: settings.colors.dark_secondary,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 120,
    shadowColor: settings.colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
