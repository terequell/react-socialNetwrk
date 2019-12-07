import React from 'react'
import {connect} from 'react-redux'
import Profileinfo from './Profileinfo'
import {AddPostAC, updatePostAC, setCurrentUserAC} from '../../redux/profileReducer'
import * as axios from 'axios'
import {withRouter} from 'react-router-dom'
import {getUserPage} from '../api/requests'

class ProfileinfoContainer extends React.Component {
   componentDidMount() {
      getUserPage(this.props.match.params.userId)
         .then((response) => {
            this.props.setCurrentUser(response.data)
         })
   }

   render() {
      return (
         <Profileinfo {...this.props}/>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onChangePost:(text) => {
         dispatch(updatePostAC(text))
      },
      onAddPost: () => {
         dispatch(AddPostAC())
      },
      setCurrentUser: (user) => {
         dispatch(setCurrentUserAC(user))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileinfoContainer))

