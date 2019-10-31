import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css'

const MessagesUser = (props) => {
   let path = '/messages/'+props.id;
   return (
      <div className = {styles.nameOfPeople}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

export default MessagesUser;