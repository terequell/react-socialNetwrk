import React from 'react';
import './App.css';
import ProfileinfoContainer from './components/Profile/ProfileinfoContainer';
import Header from './components/Header/Header.js';
import Mainnav from './components/Mainnav/Mainnav';
import MessagesContainer from './components/Messages/MessagesContainer.jsx';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

const App = (props) => {
  return (
      <div className = "app-wrapper">
        <Header/>
        <Mainnav />
        <div className = 'mainContent'>
          <Route /*exact*/ path='/messages' render={() => (
            <MessagesContainer 
            />)}/>
          <Route /*exact*/ path='/profile' render={() => (
            <ProfileinfoContainer
            />)}/>
          <Route /*exact*/ path='/music' component = {Music}/>
          <Route /*exact*/ path='/settings' component = {Settings}/>
        </div>
      </div>
  );
}

export default App;
