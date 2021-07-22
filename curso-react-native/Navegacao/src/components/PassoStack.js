import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View>
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() =>
                        props.navigation.push(props.avancar)}
                />
                : false
            }

            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() =>
                        props.navigation.goBack()}
                />
                : false
            }

            {props.voltarTelaA
                ? <Button
                    title='Voltar para Tela A'
                    onPress={() =>
                        props.navigation.navigate("TelaA")}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)