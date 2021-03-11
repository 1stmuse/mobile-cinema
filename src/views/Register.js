/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';
import AppButton from '../components/AppButton';
import Header from '../components/AuthHeader';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const [showPass, setShowPass] = useState(true);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <View>
          <Text style={styles.logText}>Sign up</Text>
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
              secureTextEntry={showPass}
              placeholder="Password"
              placeholderTextColor={Colors.white}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableWithoutFeedback onPress={() => setShowPass(!showPass)}>
              <MaterialIcons name="visibility" size={10} color={Colors.white} />
            </TouchableWithoutFeedback>
          </View>
          <View style={[styles.inputView, styles.password]}>
            <TextInput
              style={[styles.input, {width: '95%'}]}
              secureTextEntry
              placeholder="Repeat Password"
              placeholderTextColor={Colors.white}
              value={rePass}
              onChangeText={(text) => setRePass(text)}
            />
            {/* <TouchableWithoutFeedback onPress={() => setShowPass(!showPass)}>
              <MaterialIcons name="visibility" size={10} color={Colors.white} />
            </TouchableWithoutFeedback> */}
          </View>
          <AppButton
            text="Sign up"
            otherStyles={{
              backgroundColor: Colors.yellow,
              width: '90%',
              marginTop: 20,
            }}
            textStyle={{color: Colors.white, fontSize: 17, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('signin')}
          />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('signin')}>
            <View style={styles.exist}>
              <Text style={{color: Colors.white}}>
                Already have an account ?
              </Text>
              <Text style={styles.signIn}>sign in</Text>
            </View>
          </TouchableWithoutFeedback>
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
  signIn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginLeft: 4,
  },
  exist: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Register;
