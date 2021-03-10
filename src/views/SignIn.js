/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';
import AppButton from '../components/AppButton';
import Header from '../components/AuthHeader';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <View>
          <Text style={styles.logText}>Login in</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Enter E-mail"
              placeholderTextColor={Colors.white}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="password"
              placeholderTextColor={Colors.white}
            />
          </View>
          <AppButton
            text="Sign in"
            otherStyles={{
              backgroundColor: Colors.yellow,
              width: '90%',
              marginTop: 20,
            }}
            textStyle={{color: Colors.white, fontSize: 17, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('signin')}
          />
          <Text style={{color: Colors.white}}>Recover Password</Text>
          <Text style={styles.or}>OR</Text>
          <View style={styles.social}>
            <AppButton
              text="Sign in"
              otherStyles={{
                backgroundColor: Colors.white,
                width: '40%',
                marginTop: 20,
              }}
              textStyle={{color: 'grey', fontSize: 17, fontWeight: 'bold'}}
              onPress={() => navigation.navigate('signin')}
            />
            <AppButton
              text="Sign in"
              otherStyles={{
                backgroundColor: Colors.white,
                width: '40%',
                marginTop: 20,
              }}
              textStyle={{color: 'grey', fontSize: 17, fontWeight: 'bold'}}
              onPress={() => navigation.navigate('signin')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logText: {
    color: Colors.white,
    fontSize: 20,
  },
  inputWrapper: {
    backgroundColor: Colors.secondary,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 30,
    borderRadius: 5,
  },
  inputView: {
    width: '90%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  input: {
    padding: 0,
    color: Colors.white,
  },
  or: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: Colors.white,
  },
  social: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
});
export default SignIn;
