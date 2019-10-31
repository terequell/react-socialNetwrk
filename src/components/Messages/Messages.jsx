import React from 'react';
import styles from './Messages.module.css'
import MessagesUser from './MessagesUser';
import MessageItem from './MessageItem';

const Messages = (props) => {
   let messagesData = props.state.messagesData.map( element => <MessagesUser name={element.name} id={element.id}/>);
   let messagesElements = props.state.messagesElements.map(message => <MessageItem message = {message.item}/>);

   return (
      <div className = {styles.messages}>
         <div className = {styles.peoples}>
            {messagesData}
         </div>   
         <div className = {styles.textOfMessages}>
            {messagesElements}
         </div>
      </div>
   )
};

export default Messages;