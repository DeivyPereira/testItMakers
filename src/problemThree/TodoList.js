import React, { Component } from 'react'

export default class TodoList extends Component {
    state = {
        items: [
            { text: 'Problema 1', done: false },
            { text: 'Problema 2', done: false },
            { text: 'Problema 3', done: false },
            { text: 'Problema 4', done: false },
            { text: 'Problema 5', done: true },
            { text: 'Problema 6', done: false }
        ],
    };
    onDoneItem = (index, state) => {
        let data = this.state.items
        data[index].done = state == false ? true : false;
        this.setState({items: data});
    }
    render() {
        return (
            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index}>
                        {item.text}
                        <button
                            disabled={item.done}
                            type="button"
                            onClick={() => this.onDoneItem(index, item.done)}
                        >
                            Finalizar
                         </button>
                    </li>
                ))}
            </ul>
        )
    }
}
