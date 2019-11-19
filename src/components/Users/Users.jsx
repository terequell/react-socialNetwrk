import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'

let Users = (props) => {
   if (props.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            props.setUsers(response.data.items)
         })
   }
   
   return <div>
            {props.users.map(user => <div key = {user.id}>
            <span>
               <div>
               <img className = {styles.imagesBar_item}  src = {user.photos.small != null ? user.photos.small : defaultUserPhoto}/>
               </div>
               <div>
                  {user.followed ? 
                  <button onClick = {() => {props.unFollow(user.id)}}>UnFollow</button> 
                  : <button onClick = {() => {props.follow(user.id)}}>Follow</button> }
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
   </div>   
}

export default Users