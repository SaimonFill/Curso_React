import React, { createContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (

    // TelaA -> TelaB
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA"
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="TelaB"
            options={{ title: 'Informações Tela B' }}>
                {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="TelaC"
            options={{ title: 'Informações Tela C' }}>
                {props => (
                <PassoStack {...props} voltarTelaA="TelaA" avancar="TelaC" voltar>
                    <TelaC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)