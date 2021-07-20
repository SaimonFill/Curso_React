import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    const lado = 50
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#c92c61',
        height: 300
    },
    V1: {
        backgroundColor: '#eb75d1',
        flexGrow: 9
    },
    V2: {
        backgroundColor: '#34b7eb',
        flexGrow: 1
    }
})