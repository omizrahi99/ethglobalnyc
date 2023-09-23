import * as React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, StyleSheet} from 'react-native';
import WorldcoinLogo from '../components/WorldcoinLogo';
import CardView from '../components/CardView';
import {useAuth0} from 'react-native-auth0';

function AddAccount({ navigation }) {
  const {authorize, clearSession, user, error, isLoading} = useAuth0();

  const addAccount = async ({ navigation }) => {
    try {
      
    } catch (e) {
      
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292929',
      }}>
      <Image
        style={{width: 350, resizeMode: 'contain'}}
        source={require('../assets/logo.png')}
      />
      <Pressable style={styles.button} onPress={addAccount}>
        <Text style={styles.text}>Add Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // For Android
    height: 100,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    paddingRight: 20,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'black',
    flexDirection: 'row',
    gap: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default AddAccount;
