import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    fontG: {
        fontSize: 24,
        textAlign: "center" // deixa todo o texto centralizado
    },
    App: {
        backgroundColor: '#bbc3c4',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20 // adiciona um espaçamento nas laterais
    },
    DisplayContador: {
        backgroundColor: '#000',
        padding: 20,
        width: 300, // tamanho do background
    },
    DisplayText: {
        color: '#FFF'
    },
    Botoes: {
        flexDirection: "row"
    }
})