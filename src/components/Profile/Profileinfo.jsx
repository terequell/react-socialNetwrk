import React from 'react'
import styles from './Profileinfoposts.module.css'
import {createAddPostAction, updatePost} from '../../../src/redux/profileReducer'

const Profileinfo = (props) => {

   let changePost = (e) => {
      let text = e.target.value
      props.dispatch(updatePost(text))
   }

   let addPost = () => {
      props.dispatch(createAddPostAction())
   }

   return (
      <div className = {styles.container}>
         <div>
            <img className = {styles.avatar} src = 'https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg'/>
            <textarea 
               className = {styles.textarea} 
               onChange = {changePost} 
               value = {props.state.currentPost}>
            </textarea>
         </div> 
         <button className = {styles.button} onClick = {addPost}>Send post</button>     
      </div>
   )
}

export default Profileinfo