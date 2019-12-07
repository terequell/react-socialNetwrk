import React from 'react';
import styles from './Mainnav.module.css'
import {NavLink} from 'react-router-dom'
import Friendsbar from './Friendsbar.js'

function Mainnav (props) {
   return (
      <nav className = {styles.mainNav}>
         <ul className = {styles.list}>
            <li><NavLink to = '/profile' activeClassName={styles.activeLink}>Profile</NavLink></li>
            <li><NavLink to = '/messages' activeClassName={styles.activeLink}>Messages</NavLink></li>
            <li><NavLink to = '/users' activeClassName = {styles.activeLink}>Users</NavLink></li>
            <li><NavLink to = '/music' activeClassName={styles.activeLink}>Music</NavLink></li>
            <li><NavLink to = '/settings' activeClassName={styles.activeLink}>Settings</NavLink></li>
         </ul>
         <Friendsbar links = {props.state}/>
      </nav>
   )
};

export default Mainnav;