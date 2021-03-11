import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppScreen from '../components/AppScreen';

const Profile = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Profile;
