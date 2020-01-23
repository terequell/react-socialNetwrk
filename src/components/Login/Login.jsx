import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import {loginUserThunk} from '../../redux/headerReducer'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
   let getDataFromLoginForm = (data) => {
      props.loginUser(data.email, data.password, data.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to = {`/profile/${props.id}`}/>
   }

   return (
      <div>
         <LoginForm onSubmit = {getDataFromLoginForm} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.header.isAuth, 
      id: state.header.id
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      loginUser: (email, password, rememberMe) => {
         dispatch(loginUserThunk(email, password, rememberMe))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)