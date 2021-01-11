import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#00F' />
            <Quadrado cor='#009' />
            <Quadrado cor='#089' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'center' ,
        backgroundColor: '#000',
        justifyContent: 'space-evenly'
    }
})