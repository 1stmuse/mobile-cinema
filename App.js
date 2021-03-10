import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, StatusBar} from 'react-native';

import AuthStacks from './src/auth';
import Colors from './src/utils/Colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      <NavigationContainer>
        <AuthStacks />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
