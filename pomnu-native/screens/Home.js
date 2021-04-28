import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Image, Alert, SafeAreaView, TouchableWithoutFeedback, AsyncStorage, TouchableOpacity, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo-app-loading'
import Day from '../components/Day'
import TodoItem from '../components/TodoItem'
import FloatingButton from '../components/FloatingButton'
import todosData from '../todosData'
import Screen from './Screen'

export default function Home({navigation}) {

    const [todos, setTodos] = useState(todosData)
    const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf')
  })

    if (loaded){
      return (
        <View style={styles.container} navigation={navigation} name='Home'>
          <TouchableOpacity 
            style={styles.naviButton}
            onPress={navigation.openDrawer}>
                <Icon name='bars' size={24} color='#292929' />
          </TouchableOpacity>
          <Day />
          <FlatList
          style={styles.list}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} />
          )}
          keyExtractor={item => item.key} />
          <FloatingButton style={{ bottom: 90}} />
        </View>
    
        );
    
      } else if (!loaded) {
        return (null)
      } 
  

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    alignItems: 'center'
  },

  naviButton: {
    top: 50,
    right: 20,
    width: 32,
    alignSelf: 'flex-end'
  },

  content: {
    flex: 1
  },

  list: {
    marginTop: 15,
    flex: 1
  },

  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
