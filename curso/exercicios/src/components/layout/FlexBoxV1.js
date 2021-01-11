import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#00F' />
            <Quadrado cor='#009' />
            <Quadrado cor='#089' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-evenly'
    }
})