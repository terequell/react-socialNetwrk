import React from 'react'
import styles from './Users.module.css'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'
import Loading from '../common/Loading'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
      let pagesCount = Math.ceil(props.totalCount/props.usersOnPage)
      let pages = []

      for(let i = 1; i < pagesCount; i++){
         pages.push(i)
      }

      return (
         <div>
            {props.isLoading ? <Loading/> : null}
            <div>
               {pages.map(page => <span onClick = {() => {props.changeUsers(page)}} className = {props.currentPage === page ? styles.currentPage : styles.numberOfPage}>{page}</span>
                  )
               }
            </div>
            {props.users.map(user => <div key = {user.id}>
            <span>
               <div>
                  <NavLink to = {`/profile/${user.id}`} >
                     <img className = {styles.imagesBar_item}  src = {user.photos.small != null ? user.photos.small : defaultUserPhoto}/>
                  </NavLink>
               </div>
               <div>
                  {user.followed ? 
                  <button disabled = {props.triedFollow.some(id => id === user.id)} onClick = {() => {
                        props.unfollowUser(user.id)   
                     }}>UnFollow</button> 
                  : <button disabled = {props.triedFollow.some(id => id === user.id)} onClick = {() => {       
                        props.followUser(user.id)
                     }}>Follow</button> 
                  }
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
      )  
   } 

export default Users