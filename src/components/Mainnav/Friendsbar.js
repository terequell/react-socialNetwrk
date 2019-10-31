import React from 'react'
import styles from './Friendsbar.module.css'


const Friendsbar = (props) => {
   return (
      <div className = {styles.container}>
         <p className = {styles.maintext}>Friends</p>
         <div className = {styles.imagesBar}>
            <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2z5g3PndyGg6AAr1S6p2hd8jCNMDRXnAYAAgzM8pRCe0Nciz3' className = {styles.imagesBar_item}/>
            <img src = 'https://habrastorage.org/getpro/habr/post_images/c18/418/8c4/c184188c4f088a155c652e51562c42f6.jpg' className = {styles.imagesBar_item}/>
            <img src = 'http://m.spletnik.ru/img/2018/09/mariana/20180919-luna-post.png'className = {styles.imagesBar_item}/>
         </div>
      </div>
   )
}

export default Friendsbar