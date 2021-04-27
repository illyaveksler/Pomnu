import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigationItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import Logo from '../assets/icons/logo.svg';
import { useFonts } from 'expo-font'

export default function Sidebar(props)  {

    const [loaded] = useFonts({
        'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf')
      })
    
    if (loaded) {
        return (
        <ScrollView>
            <Text style={styles.title}>pomnu</Text>
            <Logo width={120} height={40} />
        </ScrollView>
        )
        // Last time I left off, I was trying to implement an SVG into
        // the sidebar menu.
    } else if (!loaded) {
        return (
        null
        )
      } 
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter-SemiBold', 
        padding: 38,
        fontSize: 18
    }
})