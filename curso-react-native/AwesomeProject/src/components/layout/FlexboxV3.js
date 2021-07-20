import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    const lado = 50
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#eb75d1' lado={20} />
            <Quadrado cor='#459e09' lado={30} />
            <Quadrado cor='#34b7eb' lado={40} />
            <Quadrado cor='#ab9716' lado={50} />
            <Quadrado cor='#c92c61' lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})