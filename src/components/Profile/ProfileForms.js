import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './Profileinfoposts.module.css'
import {minLength, maxLength, textareaValidated} from '../utils/formValidators'

const minLength2 = minLength(2)
const maxLength30 = maxLength(30)


const AddPostReduxForm = (props) => {
   return (
      <form onSubmit = {props.handleSubmit}>
         <Field className = {styles.textarea}  name = 'newPostText' 
                component = {textareaValidated} type = 'text'
                validate = {[minLength2, maxLength30]}/>
         <button className = {styles.button}>Add new post</button>
      </form>
   )
}

export default reduxForm({form:'addNewMessage'})(AddPostReduxForm)
