import React from 'react'
import { View, Text, Button, StyleSheet, Switch, SafeAreaView } from 'react-native'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
        }}>

            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />
                : false
            }

            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.navigate(
                            props.avancar,
                            props.avancarParams
                        )
                    }}
                />
                : false
            }
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)