import React, { Component } from 'react'

export default class FocusableInput extends Component {
    render() {
        var focused = this.props.focused;
        return (
            <div onClick={e => focused.current.focus()}>
                    Focus Input
            </div>

        )
    }
}
