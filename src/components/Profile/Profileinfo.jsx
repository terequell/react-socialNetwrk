import React from 'react'
import styles from './Profileinfoposts.module.css'
import Postitem from './Postitem'
import Loading from '../common/Loading'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'

const Profileinfo = (props) => {
   let profileposts = props.profilePage.postsContent.map(element => 
   <Postitem 
      photo = {props.profilePage.currentUser ? props.profilePage.currentUser.photos.small : defaultUserPhoto}
      text = {element.text} 
      likes = {element.likes} 
      key = {element.id}
      /> )

   let changePost = (e) => {
      let text = e.target.value
      props.onChangePost(text)
   }

   let addPost = () => {
      props.onAddPost()
   }

   let currentUser = props.profilePage.currentUser
   console.log(currentUser)

   if (!currentUser) {
        return (
           <Loading/>
        ) 
   } else {
      return (
         <div className = {styles.container}>
            <div>
               <div className = {styles.userProfileDescription}>
                  <img className = {styles.largePhoto} src = {currentUser.photos.large}/>
                  <div className = {styles.description}>
                     FullName: {currentUser.fullName} 
                     {currentUser.lookingForAJob ? <p>I'm looking for a job now :)</p> : <p>I have a job now, sorry :(</p>}
                     <p>My contacts:</p> 
                     {Object.keys(currentUser.contacts).map(item => (
                        currentUser.contacts[item] ? <p>{item}: <a href={currentUser.contacts[item]}>{currentUser.contacts[item]}</a></p> : null
                     ))}
                  </div>
               </div>
               <img className = {styles.avatar} src = {props.profilePage.currentUser.photos.small}/>
               <textarea 
                  className = {styles.textarea} 
                  onChange = {changePost} 
                  value = {props.profilePage.currentPost}
                  >
               </textarea>
            </div> 
            <button className = {styles.button} onClick = {addPost}>Send post</button>    
            {profileposts} 
         </div>
         )
      }
   }

export default Profileinfo