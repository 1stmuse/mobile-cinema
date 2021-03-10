import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import Colors from '../utils/Colors';

const AppScreen = ({moreStyle, children}) => {
  return (
    <SafeAreaView style={[styles.container, {...moreStyle}]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: StatusBar.currentHeight,
  },
});
export default AppScreen;
