import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const StackBackButton = () => {
  return (
    <View style={styles.container}>
      <Text>go back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#3c3f4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default StackBackButton;
