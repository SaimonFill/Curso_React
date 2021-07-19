import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={Estilo.DisplayContador}>
            <Text style={[Estilo.fontG, Estilo.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}