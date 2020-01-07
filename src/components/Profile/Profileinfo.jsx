import React from 'react'
import styles from './Profileinfoposts.module.css'
import Postitem from './Postitem'
import Loading from '../common/Loading'
import Profilestatus from './Profilestatus'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'
import { Field, reduxForm } from 'redux-form'

const Profileinfo = (props) => {
   let profileposts = props.profilePage.postsContent.map(element => 
   <Postitem 
      photo = {props.profilePage.currentUser ? props.profilePage.currentUser.photos.small : defaultUserPhoto}
      text = {element.text} 
      likes = {element.likes} 
      key = {element.id}
      /> )
   let addNewPost = (formData) => {
      props.onAddPost(formData.newPostText)
   }

   let currentUser = props.profilePage.currentUser

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
                     Status:<Profilestatus status = {props.status} updateStatus = {props.updateUserStatus}/>
                     FullName: {currentUser.fullName} 
                     {currentUser.lookingForAJob ? <p>I'm looking for a job now :)</p> : <p>I have a job now, sorry :(</p>}
                     <p>My contacts:</p> 
                     {Object.keys(currentUser.contacts).map(item => (
                        currentUser.contacts[item] ? <p>{item}: <a href={currentUser.contacts[item]}>{currentUser.contacts[item]}</a></p> : null
                     ))}
                  </div>
               </div>
               <img className = {styles.avatar} src = {props.profilePage.currentUser.photos.small}/>
               <AddPostReduxForm onSubmit = {addNewPost}/>
            </div>     
            {profileposts} 
         </div>
         )
      }
   }

const AddPostForm = (props) => {
   return (
      <form onSubmit = {props.handleSubmit}>
         <Field className = {styles.textarea}  name = 'newPostText' component = 'textarea' type = 'text'/>
         <button className = {styles.button}>Add new post</button>
      </form>
   )
}

const AddPostReduxForm = reduxForm({form:'addNewMessage'})(AddPostForm)

export default Profileinfo