import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';
import AppButton from '../components/AppButton';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          name="movie-roll"
          size={150}
          color={Colors.white}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.Min}>
          Min<Text style={{color: Colors.yellow}}>ema</Text>
        </Text>
        <Text style={styles.home}>Your home cinema</Text>
      </View>
      <View style={styles.buttons}>
        <AppButton
          text="Sign in"
          otherStyles={{backgroundColor: Colors.yellow, width: '70%'}}
          textStyle={{color: Colors.white, fontSize: 17, fontWeight: 'bold'}}
        />
        <AppButton
          text="Sign in"
          otherStyles={{width: '70%'}}
          textStyle={{color: Colors.yellow, fontSize: 17, fontWeight: 'bold'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: '40%',
  },
  Min: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  home: {
    color: Colors.white,
    fontSize: 20,
  },
  buttons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 60,
    position: 'absolute',
    bottom: 10,
  },
});
export default Welcome;
