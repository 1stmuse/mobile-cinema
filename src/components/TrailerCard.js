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

const TrailerCard = ({item, icon}) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <ImageBackground
        source={
          item.poster_path
            ? {uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}
            : require('../assets/images/bw.jpg')
        }
        style={styles.container}
        resizeMode="stretch"
        imageStyle={{
          borderRadius: 20,
          width: '100%',
          height: '100%',
        }}>
        {icon && (
          <View style={styles.play}>
            <FontAwesome5 name="play" size={25} color={Colors.white} />
          </View>
        )}
      </ImageBackground>
      {item.title && (
        <View>
          <Text style={styles.text}> {item.title} </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    height: height * 0.2,
    borderRadius: 10,
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
  text: {
    color: Colors.white,
    marginLeft: 10,
    marginTop:8
  },
});
export default TrailerCard;
