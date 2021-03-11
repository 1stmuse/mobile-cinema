import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../views/Profile';
import {noHeader} from '../../utils/screenOptions';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
