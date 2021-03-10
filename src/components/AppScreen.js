import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const AppScreen = ({moreStyle, children}) => {
  return (
    <View style={[styles.container, {...moreStyle}]}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppScreen;
