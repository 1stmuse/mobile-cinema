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
import {useFetchMovie} from '../apis/fetchMovies';
import AppScreen from '../components/AppScreen';
import MovieCard from '../components/MovieCard';
import TrailerCard from '../components/TrailerCard';
import Colors from '../utils/Colors';

const Home = ({navigation}) => {
  const comedyMovies = useFetchMovie('comedy');
  const cinemaMovies = useFetchMovie('cinema');
  const interestingMovies = useFetchMovie('interesting');
  const popularMovies = useFetchMovie('popular');

  return (
    <AppScreen>
      <View style={styles.container}>
        <ScrollView>
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
              onPress={() => navigation.navigate('profileStack')}>
              <Ionicons
                name="person-circle-outline"
                size={35}
                color={Colors.white}
              />
            </TouchableWithoutFeedback>
          </View>
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
                renderItem={({item}) => (
                  <TrailerCard item={item} icon="false" />
                )}
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
                data={cinemaMovies}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => <MovieCard item={item} />}
              />
            </View>
          </View>
          <View style={styles.popular}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>The most interesting</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={interestingMovies}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => (
                  <TrailerCard
                    item={item}
                    text="Plunged into the world of fiction"
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.popular}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>Popular</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popularMovies}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({item}) => <MovieCard item={item} />}
              />
            </View>
          </View>
          <View style={styles.popular}>
            <View style={styles.capHeading}>
              <Text style={styles.trailerCap}>Comedies</Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={comedyMovies}
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
    marginBottom: 10,
  },
  trailerCap: {
    color: Colors.white,
    fontSize: 20,
  },
  popular: {
    marginTop: 20,
  },
});
export default Home;
