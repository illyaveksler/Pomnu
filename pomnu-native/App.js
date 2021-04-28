import React from 'react'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faUser, faGraduationCap, faMoon, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideBar from './components/SideBar'
import {
  ProfileScreen,
  DarkModeScreen,
  ConnectCalendarsScreen,
  TutorialScreen,
  LogOutScreen
} from './screens'
import HomeScreen  from './screens/Home'
console.disableYellowBox = true

const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: <FontAwesomeIcon icon={ faHome } size={20} />
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      drawerIcon: <FontAwesomeIcon icon={ faUser } />
    }
  },
  ConnectCalendarsScreen: {
    screen: ConnectCalendarsScreen,
    navigationOptions: {
      title: 'Connect Calendars',
      drawerIcon: <FontAwesomeIcon icon={ faCalendarPlus } size={19} />
    }
  },
  DarkModeScreen: {
    screen: TutorialScreen,
    navigationOptions: {
      title: 'Tutorial',
      drawerIcon: <FontAwesomeIcon icon={ faGraduationCap } size={20} />
    }
  },
  TutorialScreen: {
    screen: DarkModeScreen,
    navigationOptions: {
      title: 'Dark Mode',
      drawerIcon: <FontAwesomeIcon icon={ faMoon } size={20} />
    }
  },
  LogOutScreen: {
    screen: LogOutScreen,
    navigationOptions: {
      title: 'Log out',
      drawerIcon: <FontAwesomeIcon icon={ faSignOutAlt } size={19} />
    }
  }
},{
  contentComponent: props => <SideBar {...props} />,
  hideStatusBar: true,
  contentOptions: {
    itemContainerStyle: {
      marginTop: 5,
      marginHorizontal: 2
    },
    itemStyle: {
      borderRadius: 4
    }
  }
})

export default createAppContainer(DrawerNavigator)
