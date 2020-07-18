import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import dashboard from './dashboard/dashboard'
import Message from './problemOne/Message'
import TextInput from './problemTwo/TextInput'
import TodoList from './problemThree/TodoList'
import ProviderHome from './problemFour/ProviderHome'
import problemFive from './problemFive/problemFive'
import problemSix from './problemSix/problemSix'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/problemone" component={Message} />
            <Route path="/problemtwo" component={TextInput} />
            <Route path="/problemthree" component={TodoList} />
            <Route path="/problemfour" component={ProviderHome} />
            <Route path="/problemfive" component={problemFive} />
            <Route path="/problemsix" component={problemSix} />
            <Route path="/" component={dashboard} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}


export default App;
