import React from 'react'
import styles from './Messages.module.css'
import { Field, reduxForm } from 'redux-form'
import {minLength, maxLength, textareaValidated} from '../utils/formValidators'

const minLength3 = minLength(3)
const maxLength30 = maxLength(30)

const AddMessageForm = (props) => {
   return(
      <form onSubmit = {props.handleSubmit}>
         <Field name = 'newMessage' component = {textareaValidated} 
                type = 'text' className = {styles.textarea} 
                placeholder = 'Enter your message' validate = {[minLength3, maxLength30]}/> 
         <button>Send message</button>
      </form>
   )
}

export default reduxForm({form: 'addNewMessage'})(AddMessageForm)