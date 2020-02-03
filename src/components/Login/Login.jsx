import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import {loginUserThunk, getCaptchaThunkCreator} from '../../redux/headerReducer'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
   let getDataFromLoginForm = (data) => {
      props.loginUserThunk(data.email, data.password, data.rememberMe, data.captchaSymbols)
   }

   if (props.isAuth) {
      return <Redirect to = {`/profile/${props.id}`}/>
   }

   return (
      <div>
         <LoginForm getCaptchaThunkCreator = {props.getCaptchaThunkCreator} captchaUrl = {props.captchaUrl} onSubmit = {getDataFromLoginForm} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.header.isAuth, 
      id: state.header.id,
      captchaUrl: state.header.captchaUrl
   }
}

export default connect(mapStateToProps,{loginUserThunk, getCaptchaThunkCreator})(Login)