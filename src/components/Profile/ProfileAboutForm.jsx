import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, Textarea } from '../common/FormContols/FormControls'

const ProfileAboutBlock = (props) => {
   return (
      <form onSubmit = {props.handleSubmit}>
         {props.error}
         <Field placeholder = {props.currentUser.fullName} component = {Input} type = 'text' name = 'fullName'/>
         lookingForAJob:<Field component = {Input} type = 'checkbox' name = 'lookingForAJob'/>
         <Field placeholder = {'lookingForAJobDescription'} component = {Textarea} type = 'text' name = 'lookingForAJobDescription'/>
         <Field placeholder = {'aboutMe'} component = {Textarea} type = 'text' name = 'aboutMe'/>
         {Object.keys(props.currentUser.contacts).map(item => (
           <Field placeholder = {item} component = {Input} type = 'text' name = {'contacts.' + item}/>
         ))}
         <button>Save</button>
      </form>
   )
}

export default reduxForm({form: 'profile_about'})(ProfileAboutBlock)