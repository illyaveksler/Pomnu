import React from 'react'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideBar from './components/SideBar'
import {
  HomeScreen,
  ActivityScreen,
  ConnectCalendarsScreen,
  TutorialScreen,
  LogOutScreen
} from './screens'

const DrawerNavigator = createDrawerNavigator({
  HomeScreen,
  ActivityScreen,
  ConnectCalendarsScreen,
  TutorialScreen,
  LogOutScreen
},{
  contentComponent: props => <SideBar {...props} />
})

export default createAppContainer(DrawerNavigator)
