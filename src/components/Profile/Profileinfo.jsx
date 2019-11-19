import React from 'react'
import styles from './Profileinfoposts.module.css'
import Postitem from './Postitem'

const Profileinfo = (props) => {
   let profileposts = props.profilePage.postsContent.map(element => <Postitem text = {element.text} likes = {element.likes} key = {element.id}/> )

   let changePost = (e) => {
      let text = e.target.value
      props.onChangePost(text)
   }

   let addPost = () => {
      props.onAddPost()
   }

   return (
      <div className = {styles.container}>
         <div>
            <img className = {styles.avatar} src = 'https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg'/>
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

export default Profileinfo