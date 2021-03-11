import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../views/Home';
import {noHeader} from '../../utils/screenOptions';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
