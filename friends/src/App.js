import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


import {Login, Loading, Public} from "./Components";
import {PrivateRoute, ProtectedRoute} from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">

        <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>

            <li>
              <Link to="/login">LogIn</Link>
            </li>

            <li>
              <Link to="/friends">Friends Page</Link>
            </li>
        </ul>
        
        <Route path="/" component={Public}/>
        <Route path="/login" component={Login}/>
        
        <PrivateRoute path='/friends' component={ProtectedRoute} />
      </div>
    );
  }
}

export default App;
