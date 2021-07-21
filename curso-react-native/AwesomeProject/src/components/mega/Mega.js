import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        // sempre que for alterar o estado do componente, tem que chamar o setState
        this.setState({ qtdNumeros: +qtde })
    }

    // função recursiva
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }
        numeros.sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }
    /*
    função que deve ser chamada ao renderizar o componente na tela.
    essa função deve retornar um texto em JSX
    */
    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    // keyboardType faz o teclado subir numerico
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtd de Números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <View style={{
                    marginTop: 20,
                    borderWidth: 2,
                    borderColor: '#0a0a0a',
                    borderRadius: 4,
                }}>
                    <Button
                        title='Gerar'
                        onPress={this.gerarNumeros}
                    />
                </View>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}