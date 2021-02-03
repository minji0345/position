import React, { useState } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom"
import App from '../App'
// import logo from './compoenets/images/logo-02.png';
import './App.css';
// import Main from './compoenets/Main';
// import HeaderBar from './compoenets/HeaderBar';

function Login() {


    return (
        <Router>
            <Link to="/">
                <button>main</button>
            </Link>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
        );
    }
    
export default Login;