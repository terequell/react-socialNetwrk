import React from 'react'
import styles from './Profileinfoposts.module.css'

const Postitem = (props) => {
   console.log(props)
   return (
      <div className = {styles.container}>
         <div className = {styles.post}>
            <img className = {styles.avatar} src = {props.photo}/>
            {props.text}
         </div>
         <span className = {styles.likes}>Likes:{props.likes}</span>
      </div>
   )
}

export default Postitem