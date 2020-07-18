import React, { Component } from 'react'
import { connect } from 'react-redux';
class Greeter extends Component {
  state = {
    name: ''
  };
  handleChange = (e) =>{ 
    this.setState({name: e.target.value});
  }
  handleEdit = () => {
    console.log(this.state.name) 
    this.props.dispatch({ type: 'CHANGE_NAME', data: this.state.name })
  }
  render() {
    return (
      <div>
        <small>Escribe el nombre el deseas que saludemos.</small><br/>
         <input type="text" value={this.state.name} onChange={this.handleChange} /><br/>
         <button onClick={this.handleEdit}>Actualizar Nombre</button>
         <hr/>
         Hola {this.props.name}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      name: state
  }
}
export default connect(mapStateToProps)(Greeter);