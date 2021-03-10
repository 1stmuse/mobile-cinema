import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </AppScreen>
  );
};

export default AuthStacks;
