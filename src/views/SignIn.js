/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';
import AppButton from '../components/AppButton';
import Header from '../components/AuthHeader';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <View>
          <Text style={styles.logText}>Login</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Enter E-mail"
              placeholderTextColor={Colors.white}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={[styles.inputView, styles.password]}>
            <TextInput
              style={[styles.input, {width: '95%'}]}
              secureTextEntry
              placeholder="password"
              placeholderTextColor={Colors.white}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <MaterialIcons name="visibility" size={10} color={Colors.white} />
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
              text="facebook"
              otherStyles={{
                backgroundColor: Colors.white,
                width: '45%',
                marginTop: 20,
              }}
              textStyle={{color: 'black', fontSize: 17, fontWeight: 'normal'}}
              onPress={() => navigation.navigate('signin')}
              LeftIcon={() => (
                <Feather name="facebook" size={20} color="blue" />
              )}
            />
            <AppButton
              text="google"
              otherStyles={{
                backgroundColor: Colors.white,
                width: '40%',
                marginTop: 20,
              }}
              textStyle={{color: 'black', fontSize: 17, fontWeight: 'normal'}}
              onPress={() => navigation.navigate('signin')}
              LeftIcon={() => <Zocial name="google" size={20} color="red" />}
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
    marginTop: '12%',
  },
  logText: {
    color: Colors.white,
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputWrapper: {
    backgroundColor: Colors.secondary,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 30,
    borderRadius: 10,
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
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 1,
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
