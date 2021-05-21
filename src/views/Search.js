import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AppScreen from '../components/AppScreen';
import Colors from '../utils/Colors';
import axios from 'axios';
import {useFetchMovie} from '../apis/fetchMovies';
import {DB_KEY, DB_URL} from '@env';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([])
  const comedyMovies = useFetchMovie('comedy');
  // console.log(comedyMovies[0])
  const clearSearch = () => {
    setSearchTerm('');
    Keyboard.dismiss();
  };

  const getMovies = async () =>{
    // if(searchTerm === "") {
    //   return setMovies([])
    // }
    try {
      const {data} = await axios.get(`${DB_URL}/search/movie?api_key=${DB_KEY}&query=${searchTerm}`)
      const {results} = data;
      setMovies(results);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    if(searchTerm === "") {
      return setMovies([])
    }
    getMovies()
  } , [searchTerm])

  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Movies, series, genres"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholderTextColor={Colors.white}
          />
          {searchTerm !== '' ? (
            <TouchableWithoutFeedback onPress={clearSearch}>
              <EvilIcons name="close" size={20} color={Colors.white} />
            </TouchableWithoutFeedback>
          ) : (
            <EvilIcons name="search" size={20} color={Colors.white} />
          )}
        </View>
        {
          movies.length ? 
          (<View style={styles.results}>
            <ScrollView >
              {
                movies.map((m) => (
                  <View key={m.id} style={styles.result} >
                    <FontAwesome5 name="sd-card" size={40} color={Colors.yellow} />
                    <View style={{marginLeft: 20}}>
                      <Text style={{color: Colors.white, fontSize:18}}> {m.title} </Text>
                      <Text style={{color: Colors.white}}> {m.release_date} </Text>
                    </View>
                  </View>
                ))
              }
            </ScrollView>
            </View>
          ) : searchTerm === "" && null
        }
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // width: '95%',
    paddingHorizontal:20
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"100%",
    backgroundColor: Colors.secondary,
    paddingHorizontal: 20,
    marginBottom: -5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: Colors.white,
    fontSize: 16,
  },
  result:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  results: {
    backgroundColor: "grey",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 70,
    // height: 200,
  }
});
export default Search;
