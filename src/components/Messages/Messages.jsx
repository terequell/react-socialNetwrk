import React from 'react';
import styles from './Messages.module.css'
import MessagesUser from './MessagesUser';
import MessageItem from './MessageItem';
import AddMessageForm from './MessagesForms'



const Messages = (props) => {
   let messagesData = props.messagesPage.messagesData.map(element => <MessagesUser name={element.name} key={element.id}/>);
   let messagesElements = props.messagesPage.messagesElements.map(message => <MessageItem message = {message.item} key = {message.id}/>);

   let getNewMessage = (formData) => {
      props.onAddMessage(formData.newMessage)
   }

   return (
      <div className = {styles.messages}>
         <div className = {styles.peoples}>
            {messagesData}
         </div>   
         <div className = {styles.textOfMessages}>
            {messagesElements}
            <div>
               <AddMessageForm   onSubmit = {getNewMessage}/>
            </div>
         </div>
      </div>
   )
};


export default Messages;