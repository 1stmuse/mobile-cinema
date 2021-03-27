import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../utils/Colors';

const ProfileHeader = ({navigation, header, icon}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.back}>
          <Ionicons name="md-chevron-back" size={20} color={Colors.white} />
        </View>
      </TouchableWithoutFeedback>
      {header && (
        <View>
          <Text style={styles.headerTxt}> {header} </Text>
        </View>
      )}
      {icon && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.add}>
            <Ionicons name={icon} size={20} color={Colors.white} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20%',
  },
  headerTxt: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  add: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
});
export default ProfileHeader;
