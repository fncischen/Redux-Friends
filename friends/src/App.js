import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
        </ul>
        
        <Route path="/" component={Public}/>
        <Route path="/login" component={Login}/>
        
        <PrivateRoute path='/private' component={Loading} />
        <ProtectedRoute path='/friends' component={FriendsList} />
      </div>
    );
  }
}

export default App;
