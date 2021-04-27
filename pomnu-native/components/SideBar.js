import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import Logo from '../assets/icons/logo.svg';
import { useFonts } from 'expo-font'

export default function Sidebar(props)  {

    const [loaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf')
      })
    
    if (loaded) {
        return (
        <ScrollView>
            <Text style={styles.title}>pomnu</Text>
            <Logo style={styles.logo} />
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />
            <Text style={styles.username}>vitalSigns<Text style={{ color: '#7e7e7e'}}>{'#9683'}</Text></Text>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
        )
    } else if (!loaded) {
        return (
        null
        )
      } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontFamily: 'Inter-SemiBold', 
        padding: 36,
        fontSize: 18
    },
    username: {
        fontFamily: 'Inter-Bold', 
        fontSize: 16,
        bottom: 68,
        left: 95
    },  
    logo: {
        bottom: 53,
        left: 107
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF',
        bottom: 20,
        left: 15
    }
})