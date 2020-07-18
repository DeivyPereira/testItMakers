import React, { Component } from 'react'
import FocusableInput from './FocusableInput'

export default class TextInput  extends Component {
    render() {
        var refInput = React.createRef();
        return (
            <div>
                <FocusableInput focused={refInput}/>
                <input ref={refInput} placeholder="Ingresa tu nombre y apellido" />
            </div>
        )
    }
}
