import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={Estilo.Botoes}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}