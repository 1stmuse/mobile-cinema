import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = ({text, otherStyles, textStyle, icon}) => {
  return (
    <TouchableOpacity style={[styles.container, {...otherStyles}]}>
      <View>
        <Text style={textStyle}>{text} </Text>
        {icon && (
          <MaterialCommunityIcons
            name={icon.name}
            size={icon.size}
            color={icon.color}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius:5
  },
});
export default AppButton;
