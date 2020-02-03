import React from 'react'
import Loading from '../common/Loading'
import Paginator from './Paginator'
import User from './User'

const Users = (props) => {
      return (
         <div>
            {props.isLoading ? <Loading/> :
            <div>
               <Paginator {...props} />
               {props.users.map(user => <User key = {user.id} user = {user} unfollowUser = {props.unfollowUser} followUser = {props.followUser} triedFollow = {props.triedFollow} startDialogWithUser = {props.startDialogWithUser}/>)}
            </div>
            }
         </div>
      )
   } 

export default Users