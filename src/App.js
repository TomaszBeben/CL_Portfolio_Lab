import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, /*Link*/ } from "react-router-dom";
import './scss/main.scss';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';



const App = () =>{
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/oddaj-rzeczy" component={Form}/>
            <Route exact path="/logowanie" component={Login}/>
            <Route exact path="/rejestracja" component={Register}/>
            <Route exact path="/wylogowano" component={Logout}/>
            </Switch>
            
        </HashRouter>
        
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( <App/> , document.getElementById('app'))
})
export default App

