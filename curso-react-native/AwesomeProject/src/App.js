import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Estilo from './components/estilo'

import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import UsuarioLogado from './components/UsuarioLogado'
// import Membro from './components/relacao/Membro'
// import Familia from './components/relacao/Familia'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro' // 'index.js' importou o 'App.js' que importou o 'Primeiro.js'

export default () => (
    <SafeAreaView style={Estilo.App}>
        <Mega qtdNumeros={0} />
        {/*<Familia >
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />        
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia >
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
        </Familia>
        <Botao />
        <ContadorV2 />
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
    </SafeAreaView>
)