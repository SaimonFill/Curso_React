import React from 'react'
import { View, StyleSheet } from 'react-native'

import Estilo from './components/estilo'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro' // 'index.js' importou o 'App.js' que importou o 'Primeiro.js'

export default () => (
    <View style = {Estilo.App}>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
)