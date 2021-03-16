/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from 'react-native';

const data = new Array(5).fill({name: 'john'});

import Ionicons from 'react-native-vector-icons/Ionicons';
import AppScreen from '../components/AppScreen';
import MovieCard from '../components/MovieCard';
import TrailerCard from '../components/TrailerCard';
import Colors from '../utils/Colors';

const Home = ({navigation}) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback>
            <View style={{marginRight: 20}}>
              <Ionicons
                name="notifications-outline"
                size={30}
                color={Colors.white}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('profile')}>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={Colors.white}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <View style={styles.trailer}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>Trailers</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => <TrailerCard item={item} />}
              />
            </View>
          </View>
          <View style={styles.popular}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>Now at the cinema</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => <MovieCard item={item} />}
              />
            </View>
          </View>
          <View style={styles.popular}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>Now at the cinema</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => <MovieCard item={item} />}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capHeading: {
    paddingLeft: 5,
    marginBottom: 5,
  },
  trailerCap: {
    color: Colors.white,
    fontSize: 20,
  },
  popular: {
    marginTop: 12,
  },
});
export default Home;
