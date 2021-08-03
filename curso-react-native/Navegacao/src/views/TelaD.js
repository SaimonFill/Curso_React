import React from 'react'
import { Button, TouchableHighlight, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ // barra superior
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: '#00a2fa'
            }}>
                <TouchableHighlight
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        }, 3000)
                    }}>
                    <Ionicons
                        name='reorder-three'
                        size={35}
                        color='white'
                    />
                </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#add1ff' corTexto='#000'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}