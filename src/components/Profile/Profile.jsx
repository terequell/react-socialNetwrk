import React from 'react'
import styles from './Profile.module.css'
import Profileinfo from './Profileinfo'
import Postitem from './Postitem'

const Profile = (props) => {

   let profileposts = props.state.postsContent.map(element => <Postitem text = {element.text} likes = {element.likes}/> );

   return (
      <div className = {styles.maintext}>
         <Profileinfo 
            dispatch = {props.dispatch} 
            state = {props.state}/>
         {profileposts}
      </div>
   )
};

export default Profile;