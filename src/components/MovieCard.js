/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');

const MovieCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={require('../assets/images/bw.jpg')}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.movieTitle}>Black widw</Text>
          <Text style={styles.access}>Free</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.38,
    height: 250,
    flex: 1,
    marginHorizontal: 10,
  },
  imageView: {
    height: '80%',
  },
  textView: {
    flex: 1,
    width: '100%',
  },
  movieTitle: {
    color: Colors.white,
    fontSize: 16,
  },
  access: {
    color: Colors.white,
    opacity: 0.6,
  },
});
export default MovieCard;
