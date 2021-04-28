import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Day = () => {

    var date = new Date().getDate()
    var month = new Date().getMonth()
    var day = new Date().getDay()

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    return (

        <View style={styles.container}>
            <Text style={styles.text}>
            Today
                <Text style={{ 
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Inter-Medium'
                }}>   {months[month]} {date}, {days[day]}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        fontSize: 28,
        fontFamily: 'Inter-Medium',
        marginTop: 60,
        color: 'black'
    },
    container: {
        flex: 0
    }
})

export default Day