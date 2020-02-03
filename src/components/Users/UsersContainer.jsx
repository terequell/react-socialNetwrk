import Users from './Users'
import {connect} from 'react-redux'
import {startDialogThunkCreator} from '../../redux/dialogsReducer'
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

   startDialogWithUser = (userId) => {
      this.props.startDialogThunkCreator(userId)
   }

   render = () => {
      return <Users 
         totalCount = {this.props.totalCount}
         usersOnPage = {this.props.usersOnPage}
         changeUsers = {this.changeUsers}
         currentPage = {this.props.currentPage}
         users = {this.props.users}
         follow = {this.props.followAC}
         unFollow = {this.props.unFollowAC}
         isLoading = {this.props.isLoading}
         tryFollow = {this.props.tryFollowAC}
         triedFollow = {this.props.triedFollow}
         unfollowUser = {this.props.UnfollowUserThunkCreator}
         followUser = {this.props.FollowUserThunkCreator}
         isAuth = {this.props.isAuth}
         startDialogWithUser = {this.startDialogWithUser}
      />
   }
}

const mapStateToProps = (state) => {
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

export default compose(
   withCheckLogin,
   connect(mapStateToProps, {startDialogThunkCreator, followAC, unFollowAC, getUsersTnunkCreator, changePageAC, setLoadingFlagAC, tryFollowAC, UnfollowUserThunkCreator, FollowUserThunkCreator})
   )(UsersContainer)
