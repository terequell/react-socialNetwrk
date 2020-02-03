import React from 'react';
import './App.css';
import ProfileinfoContainer from './components/Profile/ProfileinfoContainer';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Mainnav from './components/Mainnav/Mainnav';
import {Route, withRouter, Redirect} from 'react-router-dom';
import {withSuspense} from './components/HOC/withSuspense'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { compose } from 'redux';
import { connect } from 'react-redux'
import Loading from './components/common/Loading';
import {initializeApp} from '../src/redux/appReducer'

const Music = React.lazy(() => import('./components/Music/Music.jsx'))
const Settings = React.lazy(() => import('./components/Settings/Settings.jsx'))
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer.jsx'))
const CurrentDialog = React.lazy(() => import('./components/Messages/CurrentDialog'))

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
            <Redirect exact from = {'/'} to = {'/profile'}/>
            <Route path = '/login' render = {() => (
              <Login/>
            )}/>
            <Route exact path='/dialogs/:userId?/messages' render = {withSuspense(CurrentDialog)}/>
            <Route exact path='/dialogs/:userId?' render={withSuspense(MessagesContainer)}/>
            <Route path='/profile/:userId?' render={() => (
              <ProfileinfoContainer
              />)}/>
            <Route path = '/users' render = {() => <UsersContainer/>}/>
            <Route path='/music' render = {withSuspense(Music)}/>
            <Route path='/settings' component = {withSuspense(Settings)}/>
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
