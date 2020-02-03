import React from 'react'
import {connect} from 'react-redux'
import Profileinfo from './Profileinfo'
import {AddPostAC, getCurrentUserThunkCreator,getCurrentUserStatusThunkCreator, updateUserStatusThunkCreator, setPhotoThunkCreator, setNewAboutInfoThunkCreator} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux'
import withCheckLogin from '../HOC/withCheckLogin'
import {reset} from 'redux-form'

class ProfileinfoContainer extends React.Component {
   refreshUser() {
      let userId = this.props.match.params.userId
      
      if (!userId) {
         userId = this.props.myId
      } 

      this.props.getCurrentUserThunkCreator(userId) 
      this.props.getCurrentUserStatusThunkCreator(userId)
   }

   componentDidMount() {
      this.refreshUser()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshUser()
      }
   }

   render() {
      return (
         <Profileinfo {...this.props}/>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage,
      status: state.profilePage.currentUserStatus,
      myId: state.header.id,
      succesesfullySetted: state.profilePage.succesesfullySetted
   }
}

export default compose(
   connect(mapStateToProps, {AddPostAC, getCurrentUserThunkCreator,getCurrentUserStatusThunkCreator, updateUserStatusThunkCreator, setPhotoThunkCreator, setNewAboutInfoThunkCreator, reset}),
   withRouter,
   withCheckLogin
)(ProfileinfoContainer)


