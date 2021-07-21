import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.fontG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 40,
        width: 40,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 5,
    },
    Num: {
        marginTop: 3,
        color: '#FFF'
    }
})