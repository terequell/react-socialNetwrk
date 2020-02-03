import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './Login.module.css'
import {Input} from '../common/FormContols/FormControls'

const LoginForm  = (props) => {
   return (
      <form className = {styles.loginForm} onSubmit = {props.handleSubmit}>
         LOGIN:
         <div>
            <Field name = 'email' component = {Input} type = 'email' placeholder = {'email'}/>
         </div> 
            <Field name = 'password' component = {Input}  type = 'password' placeholder = {'password'}/>
         <div>
            RememberMe:
            <Field name = 'rememberMe' component = {Input}  type = 'checkbox'/>
         </div>
         {props.captchaUrl 
            ? <div>
               <img onClick = {props.getCaptchaThunkCreator} src = {props.captchaUrl}/>
               <Field name = 'captchaSymbols' component = {Input} type = 'text'/>
            </div> 
         : null}
         <button>Enter</button>
         <div className = {styles.error}>
            {props.error}
         </div>
      </form>
   )
}

export default reduxForm({form: 'loginForm'})(LoginForm)