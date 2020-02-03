import React from 'react'
import styles from './Profile.module.css'

const ProfileAboutBlock = (props) => {
   return (
      <div className = {styles.about__block}>
         Fullname: {props.currentUser.fullName}
         <div>
            {props.currentUser.lookingForAJob ? <p>I'm looking for a job now :)</p> : <p>I have a job now, sorry :(</p>}
            {props.currentUser.lookingForAJobDescription}
         </div> 
         {props.currentUser.aboutMe}
         <p>My contacts:</p> 
            {Object.keys(props.currentUser.contacts).map(item => (
               props.currentUser.contacts[item] ? <p key = {item.length}>{item}: <a href={props.currentUser.contacts[item]}>{props.currentUser.contacts[item]}</a></p> : null
         ))}
      </div>
   )
}

export default ProfileAboutBlock