import React from 'react';
import styles from './Messages.module.css'
import MessagesUser from './MessagesUser';
import MessageItem from './MessageItem';
import {addMessageAction, updateMessageAction} from '../../../src/redux/messageReducer'

const Messages = (props) => {
   let messagesData = props.state.messagesData.map( element => <MessagesUser name={element.name} id={element.id}/>);
   let messagesElements = props.state.messagesElements.map(message => <MessageItem message = {message.item}/>);


   let updateMessage = (e) => {
      let text = e.target.value
      props.dispatch(updateMessageAction(text))
   }

   let addMessage = () => {
      props.dispatch(addMessageAction())
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
                  class = {styles.textarea}
                  onChange = {updateMessage}
                  value = {props.state.currentMessage}
               ></textarea>
               <button class = {styles.sendButton} onClick = {addMessage}>Send the message</button>
            </div>
         </div>
      </div>
   )
};

export default Messages;