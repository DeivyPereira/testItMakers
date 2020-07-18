import React, { Component } from 'react'

import {  Link } from "react-router-dom";
export default class dashboard extends Component {
    render() {
        return (
            <div>
                <Link to="/problemone"><h2>Problema 1</h2></Link>
                <Link to="/problemtwo"><h2>Problema 2</h2></Link>
                <Link to="/problemthree"><h2>Problema 3</h2></Link>
                <Link to="/problemfour"><h2>Problema 4</h2></Link>
                <Link to="/problemfive"><h2>Problema 5</h2></Link>
                <Link to="/problemsix"><h2>Problema 6</h2></Link>
            </div>
        )
    }
}
