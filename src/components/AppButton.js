import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = ({
  text,
  otherStyles,
  textStyle,
  RightIcon,
  onPress,
  LeftIcon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {...otherStyles}]}>
      {LeftIcon && <LeftIcon />}
      <Text style={textStyle}>{text} </Text>
      {RightIcon && <RightIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
export default AppButton;
