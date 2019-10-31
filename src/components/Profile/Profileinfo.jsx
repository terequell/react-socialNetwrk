import React from 'react'
import styles from './Profileinfoposts.module.css'

const Profileinfo = (props) => {

   let newPostItem = React.createRef();

   let addPostItem = () => {
      debugger;
      let text = newPostItem.current.value;
      props.addPostItem(text)
      newPostItem.current.value = '';
   }

   return (
      <div className = {styles.container}>
         <div>
            <img className = {styles.avatar} src = 'https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg'/>
            <textarea ref = {newPostItem} className = {styles.textarea}></textarea>
         </div> 
         <button className = {styles.button} onClick = {addPostItem}>Send post</button>     
      </div>
   )
}

export default Profileinfo