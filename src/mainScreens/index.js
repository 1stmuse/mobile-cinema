import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStack from './stacks/HomeStack';
import SearchStack from './stacks/SearchStack';
import WatchStack from './stacks/WatchStack';
import ProfileStack from './stacks/ProfileStack';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

const MainScreens = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.white,
        style: {
          height: 70,
          backgroundColor: Colors.secondary,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -40,
        },
      }}>
      <Tab.Screen
        name="homeStack"
        children={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="watchStack"
        children={WatchStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="searchStack"
        children={SearchStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profileStack"
        children={ProfileStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreens;
