import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Screen extends React.Component {
    render() {
        return (
    <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity 
            style={styles.button}
            onPress={this.props.navigation.openDrawer}>
                <Icon name='bars' size={24} color='#292929' />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>
                    {this.props.name} Screen
                </Text>
            </View>
        </SafeAreaView>      
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    text: {
        color: '#292929',
        fontSize: 20,
        fontWeight: 'bold'
    },

    button: {
        margin: 24,
        paddingTop: 15,
        width: 32,
        alignSelf: 'flex-end'
    }
})