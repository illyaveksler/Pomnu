import React from 'react'
import Screen from './Screen'

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name='Home' />
export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name='Profile' />
export const ConnectCalendarsScreen = ({navigation}) => <Screen navigation={navigation} name='ConnectCalendars' />
export const DarkModeScreen = ({navigation}) => <Screen navigation={navigation} name='DarkMode' />
export const TutorialScreen = ({navigation}) => <Screen navigation={navigation} name='Tutorial' />
export const LogOutScreen = ({navigation}) => <Screen navigation={navigation} name='LogOut' />