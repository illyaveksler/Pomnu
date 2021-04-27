import React from 'react'
import Screen from './Screen'

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name='Home' />
export const ActivityScreen = ({navigation}) => <Screen navigation={navigation} name='Activity' />
export const ConnectCalendarsScreen = ({navigation}) => <Screen navigation={navigation} name='ConnectCalendars' />
export const TutorialScreen = ({navigation}) => <Screen navigation={navigation} name='Tutorial' />
export const LogOutScreen = ({navigation}) => <Screen navigation={navigation} name='LogOut' />