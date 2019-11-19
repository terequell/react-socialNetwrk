import Users from './UsersC'
import {connect} from 'react-redux'
import {followActionCreator, unFollowActionCreator, setUsersAcionCreator} from '../../redux/usersReducer'

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
     follow: (userId) => {
      dispatch(followActionCreator(userId))
     },

     unFollow: (userId) => {
      dispatch(unFollowActionCreator(userId))
     },

     setUsers: (users) => {
        dispatch(setUsersAcionCreator(users))
     }
   }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer