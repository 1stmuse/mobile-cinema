import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AppScreen from '../components/AppScreen';
import Colors from '../utils/Colors';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const clearSearch = () => {
    setSearchTerm('');
    Keyboard.dismiss();
  };
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
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal:20
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: Colors.white,
    fontSize: 16,
  },
});
export default Search;
