import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js'
import store from './redux/state'

let reRenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>  
         <App 
            appState = {store.getState()} 
            dispatch = {store.dispatch.bind(store)}/>
      </BrowserRouter>, 
         document.getElementById('root'));
}

reRenderEntireTree(store.getState());

store.subscribe(reRenderEntireTree)



