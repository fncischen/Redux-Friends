import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import { friendsReducer } from "./reducers";

import thunk from 'redux-thunk';
// thunk from redux-thunk

import logger from 'redux-logger';
// logger from redux-logger

import { applyMiddleware} from 'redux';
import { SIGN_IN } from './Actions/Actions';
// applyMiddleware from redux

const store = createStore(
    friendsReducer,
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const loggingInMiddleware = store => next => action => {
    if(action.type = SIGN_IN) {
        localStorage.setItem('userToken', action.payload.token);
    }
    next(action);
};


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
