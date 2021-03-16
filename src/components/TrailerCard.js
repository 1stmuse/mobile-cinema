/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');

const TrailerCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <ImageBackground
        source={require('../assets/images/bw.jpg')}
        style={styles.container}
        resizeMode="stretch"
        imageStyle={{
          borderRadius: 20,
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.play}>
          <FontAwesome5 name="play" size={25} color={Colors.white} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    height: 180,
    borderRadius: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: 'rgba(192,192,192, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TrailerCard;
