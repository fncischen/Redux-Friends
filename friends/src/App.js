import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route path="/public" component={FriendsList}/>
        <Route path="/login" component={Login}/>
        
        <PrivateRoute path='/private' component={Loading} />
        <ProtectedRoute path='/protected' component={FriendsList} />
      </div>
    );
  }
}

export default App;
