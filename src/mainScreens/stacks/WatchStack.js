import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Watch from '../../views/Watch';
import {noHeader} from '../../utils/screenOptions';

const Stack = createStackNavigator();

const WatchStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="watch" component={Watch} />
    </Stack.Navigator>
  );
};

export default WatchStack;
