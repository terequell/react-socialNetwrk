import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js'
import store from './redux/reduxStore'
import {Provider} from 'react-redux';

ReactDOM.render(
   <BrowserRouter>
      <Provider store = {store}> 
         <App/>
      </Provider> 
   </BrowserRouter>, 
      document.getElementById('root'));




