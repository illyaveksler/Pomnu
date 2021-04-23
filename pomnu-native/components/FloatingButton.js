import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AntDesign, Entypo } from '@expo/vector-icons'

export default class FloatingButton extends React.Component {
    render() {
        return (
            <View style={styles.container, this.props.style}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary]}>
                        <Icon name="star" size={20} color="#292929" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary]}>
                        <Icon name="check" size={20} color="#292929" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name="plus" size={24} color="#fff" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        left: '30%',
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#292929',
        shadowOpacity: 0.6,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: '#292929'
    },

    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF',

    }
})