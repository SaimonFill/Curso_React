import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const route = props.route || { params: { numero: 0 } }
    return (
        <TextoCentral corFundo='#c7f76d'>
            Tela C - {props.route.params.numero}
        </TextoCentral>
    )
}