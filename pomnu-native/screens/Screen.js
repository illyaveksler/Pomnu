import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Screen = () => (
    <View>
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity 
            style={{alignItems: 'flex-end', margin: 16}}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    text: {
        color: '#292929',
        fontSize: 20,
        fontWeight: 'bold'
    }
})