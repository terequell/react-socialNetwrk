import Users from './Users'
import {connect} from 'react-redux'
import {followAC, unFollowAC, getUsersTnunkCreator, changePageAC, setLoadingFlagAC, tryFollowAC, UnfollowUserThunkCreator, FollowUserThunkCreator} from '../../redux/usersReducer'
import React from 'react'
import withCheckLogin from '../HOC/withCheckLogin'
import { compose } from 'redux'

class UsersContainer extends React.Component {  
   componentDidMount() {
      this.props.getUsersTnunkCreator(this.props.usersOnPage, this.props.currentPage)
   }

   changeUsers = (pageNumber) => {
      this.props.getUsersTnunkCreator(this.props.usersOnPage, pageNumber)
   }

   render = () => {
      return <Users 
         totalCount = {this.props.totalCount}
         usersOnPage = {this.props.usersOnPage}
         changeUsers = {this.changeUsers}
         currentPage = {this.props.currentPage}
         users = {this.props.users}
         follow = {this.props.follow}
         unFollow = {this.props.unFollow}
         isLoading = {this.props.isLoading}
         tryFollow = {this.props.tryFollow}
         triedFollow = {this.props.triedFollow}
         unfollowUser = {this.props.unFollowUserThunkCreator}
         followUser = {this.props.FollowUserThunkCreator}
         isAuth = {this.props.isAuth}
      />
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      usersOnPage: state.usersPage.usersOnPage,
      currentPage: state.usersPage.currentPage,
      totalCount: state.usersPage.totalCount,
      isLoading: state.usersPage.isLoading,
      triedFollow: state.usersPage.triedFollow,
      isAuth: state.header.isAuth
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
     follow: (userId) => {
      dispatch(followAC(userId))
     },

     unFollow: (userId) => {
      dispatch(unFollowAC(userId))
     },

     changePage: (pageNum) => {
        dispatch(changePageAC(pageNum))
     }, 

     setLoadingFlag: (loadingFlag) => {
        dispatch(setLoadingFlagAC(loadingFlag))
     },

     tryFollow: (TFBool, userId) => {
        dispatch(tryFollowAC(TFBool, userId))
     },

     getUsersTnunkCreator: (usersOnPage, currentPage) => {
        dispatch(getUsersTnunkCreator(usersOnPage, currentPage))
     },

     unFollowUserThunkCreator: (userId) => {
        dispatch(UnfollowUserThunkCreator(userId))
     },

     FollowUserThunkCreator: (userId) => {
        dispatch(FollowUserThunkCreator(userId))
     }
   }
}

export default compose(
   withCheckLogin,
   connect(mapStateToProps, mapDispatchToProps)
   )(UsersContainer)
