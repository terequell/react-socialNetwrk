import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
   return (
      <header className = {styles.header}>
         <div className = {styles.loginButton}>
         {props.isAuth ? <div>{props.login }<button onClick = {props.logout}>Logout</button></div>  : 
            <NavLink to = '/login'>
               <button>Login</button>
            </NavLink>}
         </div>
      </header>
   )
}

export default Header