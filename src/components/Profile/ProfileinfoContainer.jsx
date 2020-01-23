import React from 'react'
import {connect} from 'react-redux'
import Profileinfo from './Profileinfo'
import {AddPostAC, getCurrentUserThunkCreator,getCurrentUserStatusThunkCreator, updateUserStatusThunkCreator} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import { compose } from 'redux'
import withCheckLogin from '../HOC/withCheckLogin'

class ProfileinfoContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      
      if (!userId) {
         userId = this.props.myId
      } 

      this.props.setCurrentUserThunk(userId) 
      this.props.getUserStatus(userId)
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
      myId: state.header.id
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onAddPost: (text) => {
         dispatch(AddPostAC(text))
      },
      setCurrentUserThunk: (userId) => {
         dispatch(getCurrentUserThunkCreator(userId))
      },
      getUserStatus: (userId) => {
         dispatch(getCurrentUserStatusThunkCreator(userId))
      },
      updateUserStatus: (status) => {
         dispatch(updateUserStatusThunkCreator(status))
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
   withCheckLogin
)(ProfileinfoContainer)


