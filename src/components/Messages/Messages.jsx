import React from 'react';
import styles from './Messages.module.css'
import MessagesUser from './MessagesUser';


const Messages = (props) => {
   const messagesData = props.dialogs.map(element => <MessagesUser name={element.userName} id = {element.id} key={element.id} hasNewMessages={element.hasNewMessages} photo = {element.photos.small}/>);

   return (
      <div className = {styles.messages}>
         <div className = {styles.users__list}>
         <h1 className = {styles.dialog__name}>My dialogs:</h1>
            {messagesData}
         </div>
      </div>
   )
};


export default Messages;