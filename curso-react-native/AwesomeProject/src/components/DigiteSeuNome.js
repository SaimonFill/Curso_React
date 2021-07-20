import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite Seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}