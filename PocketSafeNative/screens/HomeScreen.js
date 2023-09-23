import * as React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg'

function HomeScreen({ navigation }) {


  return (
    <View>
       <QRCode
    value= "This is the value in the QRcode"
  />
    </View>
  );
}


export default HomeScreen;
