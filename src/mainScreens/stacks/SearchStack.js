import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../views/Search';
import {noHeader} from '../../utils/screenOptions';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchStack;
