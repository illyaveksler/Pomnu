import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

const TodoItem = ({ item, onPress, style }) => {
    return (
        <View style={[styles.item]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>
                    {item.text}
                </Text>
                <View style={styles.tags}>
                    <TouchableOpacity id='tag' title={item.tag} onPress={onPress} style={styles.tag} >
                        <Text fontColor={item.tag_color} >{item.tag}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity id='good' onPress={() => console.log("Good!")} style={[styles.good]} />
                    <TouchableOpacity id='hard' onPress={() => console.log("Hard.")} style={[styles.hard]} />
                    <TouchableOpacity id='again' onPress={() => console.log("Again...")} style={[styles.again]} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        width: 450,
        fontFamily: 'Inter-Medium',
        borderColor: '#bbb9',
        borderWidth: 1,
        borderRadius: 1,
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
    },
    tags: { 
        width: '25%'
    },
    tag: {
        borderRadius: 10,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row-reverse',
        position: 'absolute',
        bottom: -5,
        left: '50%'
    },
    again: {
        padding: 12,
        borderColor: '#FF5A5A',
        borderWidth: 4,
        borderRadius: 28,
        marginRight: 5
    },
    hard: {
        padding: 12,
        borderColor: '#FFBD5A',
        borderWidth: 4,
        borderRadius: 28,
        marginRight: 5
    },
    good: {
        padding: 12,
        borderColor: '#17D061',
        borderWidth: 4,
        borderRadius: 28,
        marginRight: 5
        
    }
})

export default TodoItem