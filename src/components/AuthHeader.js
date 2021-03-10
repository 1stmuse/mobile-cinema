import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors';

const StackBackButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.back}>
          <Ionicons name="md-chevron-back" size={20} color={Colors.white} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <Text style={styles.help}>Help</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  back: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  help: {
    color: Colors.white,
    fontSize: 17,
  },
});
export default StackBackButton;
