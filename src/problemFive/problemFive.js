import React, { Component } from 'react'

export default class problemFive extends Component {
    state = { 
        text: ['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a'],
        symmetry:''
    };
    SearchSymmetry = (e) => {
        let state = e.target.value
        var ar = state.split(",").map(function(item) {
            return item.trim();
        });
        let half1 = ar.splice(0,ar.length/2)
        let half2 = ar.splice(0,ar.length)
        var result =  [
            ...half1.filter(x => !half2.includes(x)),
            ...half2.filter(x => !half1.includes(x))
        ];
        this.setState({
            symmetry: result,
            text: state
        })
    }
    render() {
        return (
            <div>
                <p>Escribe una cadena separada por comas en el siguiente recuadro para comprobar si es simetrico o no</p>
                <p><small>Ejemplo:</small> a,b,c,c,b,a (Simetrico)</p>
                <p><small>Ejemplo:</small> a,b,c,d,b,a (Asimetrico)</p>
                <hr/>
                <textarea onChange={this.SearchSymmetry} rows="5" cols="50"> </textarea>
                <hr/>
                {this.state.symmetry =='' ? 'Symmetric' : 'Asymmetric'}
            </div>
        )
    }
}
