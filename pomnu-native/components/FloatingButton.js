import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Star from '../assets/icons/calendar-star.svg'

export default class FloatingButton extends React.Component {
    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1
        
        Animated.spring(this.animation, {
            toValue: toValue,
            friction: 5,
            useNativeDriver: true
        }).start();

        this.open = !this.open;
    }

    textFade = () => {
        const toValue = this.open ? 0 : 1
        Animated.timing(fadeAnim, {
          toValue: toValue,
          duration: 200
        }).start();

        this.open = !this.open;
      }

    render() {
            const taskStyle = {
                transform: [
                    {scale: this.animation},
                    {
                        translateY: this.animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -80]
                        })
                    }
                ]
            }

            const repStyle = {
                transform: [
                    {scale: this.animation},
                    {
                        translateY: this.animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -140]
                        })
                    }
                ]
            }

            const rotation = {
                transform: [{
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg'],
                    })
                }]
            }

            const fade = {
                transform: [
                    {scale: this.animation},
                    {
                        translateY: this.animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -80]
                        })
                    }
                ]
            }

        return (
            <View style={styles.container, this.props.style}>

                {/*<Animated.View style={fade}>
                    <Text style={[styles.text, {bottom: 55}]}>
                        {' New Topic '}
                    </Text>    
                </Animated.View>*/}
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, repStyle]}>
                        <Star height={26} width={26} />
                    </Animated.View>
                </TouchableWithoutFeedback>


                {/*<Animated.View style={fade}>
                    <Text style={[styles.text]}>
                        {' New Task '}
                    </Text>    
                </Animated.View>*/}
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, taskStyle]}>
                        <FontAwesomeIcon icon={ faCalendarCheck } size={26} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
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
        left: '25%',
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
        borderColor: '#000000',
        borderWidth: 1
    },

    text: {
        position: 'relative',
        left: 55,
        bottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        color: '#323232',
        fontWeight: '500',
        letterSpacing: 1,
        lineHeight: 25
    }
})