import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css'
import defaultUserPic from '../../assets/img/defaultUserPic.png'

const MessagesUser = (props) => {
   let path = '/dialogs/'+props.id;
   return (
      <NavLink to = {path + '/messages'}>
         <div className = {styles.user__content}>
               <img src = {props.photo || defaultUserPic} className = {styles.user__avatar}/>
            <div className = {styles.user__info}>
               <p className = {styles.user__name}>Nickname: {props.name}</p>
               {props.hasNewMessages ?
                  <p>You have new messages</p> 
                  : <p>You dont have new messages</p>}
            </div>
         </div>
      </NavLink>
   )
}

export default MessagesUser