import React, { Component } from 'react'
export default class Message extends Component {
    state = { visibility: false };
    toggleVisibility = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render() {
        return (
            <div>
                <a onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Mostrar' : 'Ocultar'}
                </a>
                <hr />
                {!this.state.visibility &&
                    <h1>Hola Mundo</h1>
                }
            </div>
        );
    }
}