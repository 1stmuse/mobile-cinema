import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStack from './stacks/HomeStack';
import SearchStack from './stacks/SearchStack';
import WatchStack from './stacks/WatchStack';
import ProfileStack from './stacks/ProfileStack';
import Colors from '../utils/Colors';

const Tab = AnimatedTabBarNavigator();

const MainScreens = () => {
  return (
    <Tab.Navigator
      appearance={{
        topPadding: 20,
        tabBarBackground: Colors.secondary,
        whenActiveShow: 'icon-only',
        activeTabBackgrounds: Colors.primary,
        activeColors: Colors.white,
        dotSize: 'small',
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="homeStack"
        children={HomeStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size ? size : 24}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="watchStack"
        children={WatchStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="video"
              color={color}
              size={size ? size : 24}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="searchStack"
        children={SearchStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="search"
              color={color}
              size={size ? size : 24}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profileStack"
        children={ProfileStack}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome
              name="user-o"
              color={color}
              size={size ? size : 24}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreens;
