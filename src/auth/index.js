import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import AppScreen from '../components/AppScreen';
import Welcome from '../views/Welcome';
import SignIn from '../views/SignIn';
const Stack = createStackNavigator();

const AuthStacks = () => {
  return (
    <AppScreen>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </AppScreen>
  );
};

export default AuthStacks;
