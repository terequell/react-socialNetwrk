import React from 'react';
import styles from './Messages.module.css'
import MessagesUser from './MessagesUser';
import MessageItem from './MessageItem';


const Messages = (props) => {
   console.log(props)
   let messagesData = props.messagesPage.messagesData.map( element => <MessagesUser name={element.name} key={element.id}/>);
   let messagesElements = props.messagesPage.messagesElements.map(message => <MessageItem message = {message.item} key = {message.id}/>);


   let updateMessage = (e) => {
      let text = e.target.value
      props.onUpdateMessage(text)
   }

   let addMessage = () => {
      debugger
      props.onAddMessage()
   }

   return (
      <div className = {styles.messages}>
         <div className = {styles.peoples}>
            {messagesData}
         </div>   
         <div className = {styles.textOfMessages}>
            {messagesElements}
            <div>
               <textarea 
                  placeholder = 'Enter your message'
                  className = {styles.textarea}
                  onChange = {updateMessage}
                  value = {props.messagesPage.currentMessage}
               ></textarea>
               <button className = {styles.sendButton} onClick = {addMessage}>Send the message</button>
            </div>
         </div>
      </div>
   )
};

export default Messages;