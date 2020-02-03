import React, { useEffect } from 'react'
import styles from './Messages.module.css'
import AddMessageForm from './MessagesForms'
import {reset} from 'redux-form'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {sendNewMessageToUser, getMessagesWithUserThunkCreator} from '../../redux/dialogsReducer'
import Loading from '../common/Loading'
import { compose } from 'redux'

const CurrentDialog = React.memo((props) => {
   const {userId} = useParams();

   useEffect(() => {
      props.getMessagesWithUserThunkCreator(userId)
   }, [userId])

   const getNewMessage = (formData) => {
      props.sendNewMessageToUser(userId, formData.newMessage)
      props.reset('addNewMessage')
   }

   return (
      !props.messages ? <Loading/> :
      <div className = {styles.current__dialog__block}>
         <p className = {styles.dialog__name}>Dialog with id {userId} </p>
         <div>
            {props.changingMessagesFlag ? <Loading/> : props.messages.map(element => <div><p>{element.senderName}:{element.body}</p></div>)}
         </div>
         <div>
            <AddMessageForm onSubmit = {getNewMessage}/>
         </div>
      </div>
   )
}
)

const mapStateToProps = (state) => {
   return {
      messages: state.dialogs.currentMessages,
      changingMessagesFlag: state.dialogs.changingMessages
   }
}

export default compose (
   connect(mapStateToProps,{reset, sendNewMessageToUser, getMessagesWithUserThunkCreator})
)(CurrentDialog)