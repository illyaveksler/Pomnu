import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Alert, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native'
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading'
import Day from './components/Day'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

export default function App() {
  const [todos, setTodos] = useState(todosData)
  const [loaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf')
  })

  if (loaded){
  return (

    <View style={styles.container}>
      <Day />
      <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem item={item} />
      )}
      keyExtractor={item => item.key} />
      <View>
        
      </View>
    </View>
    );

  } else if (!loaded) {
    return (
    null
    )
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
    alignItems: 'center',
  },

  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  },

  content: {
    flex: 1
  },

  list: {
    marginTop: 20,
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