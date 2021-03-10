import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';

import AppScreen from '../components/AppScreen';
import Welcome from '../views/Welcome';
import StackBackButton from '../components/StackBackButton';

const Stack = createStackNavigator();

const AuthStacks = () => {
  return (
    <AppScreen>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={() => ({
            headerShown: false,
            // headerLeft: (props) => <StackBackButton />,
          })}
        />
      </Stack.Navigator>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AuthStacks;
