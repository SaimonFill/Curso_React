import React from 'react'
import { View, Text, Button, StyleSheet, Switch } from 'react-native'

const op = 2

export default props => (
    <View style={{ flex: 1 }}>
        <View>
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.push(
                            props.avancar,
                            {
                                numero: parseInt(Math.random() * 100)
                            }
                        )
                    }}
                    color={styles(op)}
                />
                : false
            }

            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    color={styles(op)}
                />
                : false
            }

            {props.voltarTelaA
                ? <Button
                    title='Voltar para Tela A'
                    onPress={() => {
                        props.navigation.navigate("TelaA")
                    }}
                    color={styles(op)}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)

function styles() {
    if (op == 1) {
        return color = '#009dc4'
    }
    if (op == 2) {
        return color = '#004e61'
    }
}