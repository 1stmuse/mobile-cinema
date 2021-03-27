/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppScreen from '../components/AppScreen';
import ProfileHeader from '../components/ProfileHeader';
import Colors from '../utils/Colors';

import ProfileImg from '../assets/images/pImage.jpg';
const Profile = ({navigation}) => {
  return (
    <AppScreen>
      <ScrollView style={styles.container}>
        <ProfileHeader navigation={navigation} />
        <View style={styles.header}>
          <View style={styles.profileDetail}>
            <Image style={styles.image} source={ProfileImg} />
            <View>
              <Text style={[styles.ptext, styles.pName]}>Akin Nelson</Text>
              <Text style={styles.ptext}>yourmuse@gmail.com</Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.icon}>
              <Feather name="edit-2" size={30} color={Colors.white} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{marginTop: 80}}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              style={styles.bIcon}
              name="shield-lock-outline"
              size={30}
              color={Colors.white}
            />
            <View>
              <Text style={styles.itemHead}>My purchases</Text>
              <Text style={styles.itemSup}>0 items inside</Text>
            </View>
            <View style={styles.iconForward}>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </View>
          <View style={styles.item}>
            <Feather
              style={styles.bIcon}
              name="download-cloud"
              size={30}
              color={Colors.white}
            />
            <View>
              <Text style={styles.itemHead}>Downloads</Text>
              <Text style={styles.itemSup}>Already have 0 downloads</Text>
            </View>
            <View style={styles.iconForward}>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </View>
          <View style={styles.item}>
            <Fontisto
              style={styles.bIcon}
              name="film"
              size={30}
              color={Colors.white}
            />
            <View>
              <Text style={styles.itemHead}>Watch later</Text>
              <Text style={styles.itemSup}>0 movies </Text>
            </View>
            <View style={styles.iconForward}>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </View>
          <View style={styles.item}>
            <MaterialIcons
              style={styles.bIcon}
              name="payment"
              size={30}
              color={Colors.white}
            />
            <View>
              <Text style={styles.itemHead}>Payment methods</Text>
              <Text style={styles.itemSup}>Visa **34</Text>
            </View>
            <View style={styles.iconForward}>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </View>
          <View style={styles.item}>
            <Feather
              style={styles.bIcon}
              name="settings"
              size={30}
              color={Colors.white}
            />
            <View>
              <Text style={styles.itemHead}>Settings</Text>
              <Text style={styles.itemSup}>Notifications, Password</Text>
            </View>
            <View style={styles.iconForward}>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </View>
        </View>
        <View style={styles.logout}>
          <Text style={styles.logTxt}>Log out</Text>
          <MaterialIcons name="logout" size={35} color={Colors.white} />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ptext: {
    color: Colors.yellow,
  },
  pName: {
    fontSize: 19,
    color: Colors.white,
  },
  icon: {
    marginLeft: 'auto',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    // borderWidth: 0,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
    paddingVertical: 15,
    marginBottom: 10,
  },
  bIcon: {
    marginRight: 20,
  },
  iconForward: {
    marginLeft: 'auto',
  },
  itemHead: {
    fontSize: 16,
    color: Colors.white,
  },
  itemSup: {
    color: Colors.white,
    opacity: 0.5,
    fontSize: 13,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  logTxt: {
    color: Colors.white,
    fontSize: 16,
    marginRight: 15,
  },
});
export default Profile;
