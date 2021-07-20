import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    const lado = 50
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#eb75d1' />
            <Quadrado cor='#459e09' />
            <Quadrado cor='#34b7eb' />
            <Quadrado cor='#ab9716' />
            <Quadrado cor='#c92c61' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#000'
    }
})