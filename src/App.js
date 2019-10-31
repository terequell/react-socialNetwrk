import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Mainnav from './components/Mainnav/Mainnav';
import Profile from './components/Profile/Profile.jsx';
import Messages from './components/Messages/Messages.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header/>
        <Mainnav />
        <div className = 'mainContent'>
          <Route /*exact*/ path='/messages' render={() => (<Messages state = {props.appState.messagesPage}/>)}/>
          <Route /*exact*/ path='/profile' render={() => (<Profile state = {props.appState.profilePage} addPostItem = {props.addPostItem}/>)}/>
          <Route /*exact*/ path='/music' component = {Music}/>
          <Route /*exact*/ path='/settings' component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
