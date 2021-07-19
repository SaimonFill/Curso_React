import React from 'react'
import { View, StyleSheet } from 'react-native'
import Estilo from './components/estilo'

import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro' // 'index.js' importou o 'App.js' que importou o 'Primeiro.js'

export default () => (
    <View style = {Estilo.App}>
        <ContadorV2 />
        {/*<Botao />
        <Pai />
        <Pai />
        <Contador />
        <Titulo principal="Cadastro do Produto"
            secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)