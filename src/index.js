import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore
} from 'redux';
import {
    Provider
} from 'react-redux';
import reducer from './components/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RGB from "./components/rgb";

const store = createStore(reducer);
store.subscribe( function(){
    console.log(store.getState())
} );

//dispatch: takes a redux action(dispatcher allows you send actions to store)
//getState(): returns entire application states from reducer
//subscribe(): listen for redux store changes
//everthing should be wrapped in Provider component for all this benefits

ReactDOM.render( < Provider store={store}> < RGB / > </ Provider> , document.getElementById('root'));

serviceWorker.unregister();