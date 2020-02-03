import React, { useState, useEffect } from 'react'
import styles from './Profileinfoposts.module.css'
import Postitem from './Postitem'
import Loading from '../common/Loading'
import Profilestatus from './Profilestatus'
import defaultUserPhoto from '../../assets/img/defaultUserPic.png'
import AddPostReduxForm from './ProfileForms'
import ProfileAboutBlock from './ProfileAboutBlock'
import ProfileAboutForm from './ProfileAboutForm'

const Profileinfo = (props) => {
   const [editMode, setEditMode] = useState(false)
   
   useEffect(() => {
      if (props.succesesfullySetted) {
         setEditMode(false)
      }
   }, [props.succesesfullySetted])

   let profileposts = props.profilePage.postsContent.map(element => 
      <Postitem 
         photo = {props.profilePage.currentUser && props.profilePage.currentUser.photos.small ? props.profilePage.currentUser.photos.small : defaultUserPhoto}
         text = {element.text} 
         likes = {element.likes} 
         key = {element.id}
      />)

   let addNewPost = (formData) => {
      props.AddPostAC(formData.newPostText)
      props.reset('addNewPost')
   }

   let setPhoto = (e) => {
      if (e.target.files) {
         let photo = e.target.files[0]
         props.setPhoto(photo)
      }
   }

   let setNewAboutInfo = (formData) => {
      props.setNewAboutInfoThunkCreator(formData)
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
                  <img className = {styles.largePhoto} src = {currentUser.photos.large || defaultUserPhoto}/>
                  <div className = {styles.description}>
                     Status:<Profilestatus status = {props.status} updateStatus = {props.updateUserStatusThunkCreator}/>
                     {editMode ? <ProfileAboutForm initialValues = {currentUser} onSubmit = {setNewAboutInfo} setEditMode = {setEditMode} currentUser = {currentUser}/> 
                     : <div>
                           <ProfileAboutBlock currentUser = {currentUser}/>
                           {currentUser.userId == props.myId ? <button onClick = {() => {setEditMode(true)}}>Edit</button> : null}
                        </div>
                     }
                     {!props.match.params.userId ? <input type = {'file'} onChange = {setPhoto} /> : null }
                  </div>
               </div>
               <div>
                  <img className = {styles.avatar} src = {props.profilePage.currentUser.photos.small || defaultUserPhoto}/>
                  <AddPostReduxForm onSubmit = {addNewPost}/>
               </div>
            </div>     
            {currentUser ? profileposts : null} 
         </div>
         )
      }
   }
export default Profileinfo