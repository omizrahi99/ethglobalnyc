import * as React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'
import { Enclave } from './helpers'

function HomeScreen({ navigation }) {
    React.useEffect(() => {
        const getPair = async () => {
            console.log(await Enclave.getPublicKey())
        }

        getPair()
    }, [])

    return (
        <View>
            <QRCode value={Enclave.getPublicKey()} />
        </View>
    );
}


export default HomeScreen;
