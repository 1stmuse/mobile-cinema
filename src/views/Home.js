import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AppScreen from '../components/AppScreen';

const Home = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Text>Home man</Text>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Home;
