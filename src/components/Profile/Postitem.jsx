import React from 'react'
import styles from './Profileinfoposts.module.css'

const Postitem = (props) => {

   return (
      <div className = {styles.container}>
         <div className = {styles.post}>
            <img className = {styles.avatar} src = 'https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg'/>
            {props.text}
         </div>
         <span className = {styles.likes}>Likes:{props.likes}</span>
      </div>
   )
}

export default Postitem