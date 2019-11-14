import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js'
import store from './redux/reduxStore'
import {Provider} from 'react-redux';

let reRenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store = {store}> 
            <App/>
         </Provider> 
      </BrowserRouter>, 
         document.getElementById('root'));
}

reRenderEntireTree(store.getState());

store.subscribe(() => {
   reRenderEntireTree(store.getState())
})



