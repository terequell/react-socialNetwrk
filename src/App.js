import React from 'react';
import './App.css';
import ProfileinfoContainer from './components/Profile/ProfileinfoContainer';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Mainnav from './components/Mainnav/Mainnav';
import MessagesContainer from './components/Messages/MessagesContainer.jsx';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
      <div className = "app-wrapper">
        <HeaderContainer/>
        <Mainnav />
        <div className = 'mainContent'>
          <Route /*exact*/ path='/messages' render={() => (
            <MessagesContainer 
            />)}/>
          <Route /*exact*/ path='/profile/:userId' render={() => (
            <ProfileinfoContainer
            />)}/>
          <Route path = '/users' render = {() => <UsersContainer/>}/>
          <Route /*exact*/ path='/music' component = {Music}/>
          <Route /*exact*/ path='/settings' component = {Settings}/>
        </div>
      </div>
  );
}

export default App;
