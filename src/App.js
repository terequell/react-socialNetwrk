import React from 'react';
import './App.css';
import ProfileinfoContainer from './components/Profile/ProfileinfoContainer';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Mainnav from './components/Mainnav/Mainnav';
import MessagesContainer from './components/Messages/MessagesContainer.jsx';
import {Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { compose } from 'redux';
import { connect } from 'react-redux'
import Loading from './components/common/Loading';
import {initializeApp} from '../src/redux/appReducer'

class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialised) {
      return <Loading/>
    }
    return (
        <div className = "app-wrapper">
          <HeaderContainer/>
          <Mainnav />
          <div className = 'mainContent'>
            <Route path = '/login' render = {() => (
              <Login/>
            )}/>
            <Route /*exact*/ path='/messages' render={() => (
              <MessagesContainer 
              />)}/>
            <Route /*exact*/ path='/profile/:userId?' render={() => (
              <ProfileinfoContainer
              />)}/>
            <Route path = '/users' render = {() => <UsersContainer/>}/>
            <Route /*exact*/ path='/music' component = {Music}/>
            <Route /*exact*/ path='/settings' component = {Settings}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    initialised: store.app.initialised
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: () => {
      dispatch(initializeApp())
    }
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
