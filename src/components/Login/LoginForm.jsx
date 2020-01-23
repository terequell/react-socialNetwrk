import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './Login.module.css'

const LoginForm  = (props) => {
   return (
      <form className = {styles.loginForm} onSubmit = {props.handleSubmit}>
         LOGIN:
         <div>
            <Field name = 'email' component = 'input' type = 'email' placeholder = {'email'}/>
         </div> 
            <Field name = 'password' component = 'input' type = 'password' placeholder = {'password'}/>
         <div>
            RememberMe:
            <Field name = 'rememberMe' component = 'input' type = 'checkbox'/>
         </div>
         <button>Enter</button>
         <div className = {styles.error}>
            {props.error}
         </div>
      </form>
   )
}

export default reduxForm({form: 'loginForm'})(LoginForm)