import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

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

export default App;
