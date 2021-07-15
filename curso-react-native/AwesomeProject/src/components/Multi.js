import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

/*
ao botar 'export default' junto da função, não é obrigatóro a função ser nomeada
*/
export default function Comp() {
    return <Text style={Estilo.fontG}>Comp #Oficial</Text>
}

/*
ao botar 'export' junto da função, obrigatóriamente a função deve ser nomeada
*/
export function Comp1() {
    return <Text style={Estilo.fontG}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.fontG}>Comp #02</Text>
}