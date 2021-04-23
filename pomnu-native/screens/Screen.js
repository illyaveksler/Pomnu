import React from 'react'
import {View, StatusBar} from 'react-native'

export default Screen = () => (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
        <StatusBar barStyle='light-content' />
    </View>
)