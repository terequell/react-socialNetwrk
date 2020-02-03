import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {HashRouter} from 'react-router-dom';
import App from './App.js'
import store from './redux/reduxStore'
import {Provider} from 'react-redux';

ReactDOM.render(
   <HashRouter basename = {process.env.PUBLIC_URL}>
      <Provider store = {store}> 
         <App/>
      </Provider> 
   </HashRouter>, 
      document.getElementById('root'));




