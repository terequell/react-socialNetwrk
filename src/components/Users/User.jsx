import React from 'react'
import styles from './Users.module.css'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'
import {NavLink} from 'react-router-dom'


const User = ({user, unfollowUser, followUser, triedFollow, startDialogWithUser}) => {
      return (
         <div>
            <span>
               <div>
                  <NavLink to = {`/profile/${user.id}`} >
                     <img className = {styles.imagesBar_item}  src = {user.photos.small != null ? user.photos.small : defaultUserPhoto}/>
                  </NavLink>
               </div>
               <div>
                  {user.followed ? 
                  <button disabled = {triedFollow.some(id => id === user.id)} onClick = {() => {
                        unfollowUser(user.id)   
                     }}>UnFollow</button> 
                  : <button disabled = {triedFollow.some(id => id === user.id)} onClick = {() => {       
                        followUser(user.id)
                     }}>Follow</button> 
                  }
                  <NavLink to = {`/dialogs/${user.id}/messages`}>
                     <button onClick = {() => startDialogWithUser(user.id)}>Go to dialog</button>
                  </NavLink>
                  
               </div>
            </span>
            <span>
               <span>
                  <div>
                  {user.name}
                  </div>
                  <div>
                   {user.status}
                  </div>
            </span>
            <span>
                  <div>
                  user.location.country
                  </div>
                  <div>
                  user.location.city
                  </div>
            </span>
            </span>
         </div>)
      } 

export default User