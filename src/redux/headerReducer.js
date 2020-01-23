import {authAPI} from '../components/api/requests'
import { stopSubmit } from 'redux-form'

const LOGIN_USER = 'LOGIN-USER'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}

const headerReducer = (state = initialState, action) => {
   if (action.type === LOGIN_USER) {
      return {
         ...state,
         ...action.data,
      }
   } else {
      return state
   }
}

export const loginUserAC = (id,email,login, isAuth) => {
   return ({
      type: LOGIN_USER,
      data: {id,email,login, isAuth}
   })
}

export const loginUserThunk = (email, password, rememberMe) => (dispatch) => {
   authAPI.logIn(email, password, rememberMe)
      .then((response) => {
         if (response.data.resultCode === 0) {
            dispatch(checkLoginUserThunkCreator())
         }
         else {
            dispatch(stopSubmit('loginForm', {_error: response.data.messages[0]}))
         }
      })
}

export const logoutUserThunk = () => (dispatch) => {
   authAPI.logout()
      .then(
         dispatch(loginUserAC(null,null,null,false))
         )
}

export const checkLoginUserThunkCreator = () => (dispatch) => {
   return (authAPI.checkLoginMe()
      .then((response) => {   
         if (response.data.resultCode === 0) {
            let {login, id, email} = response.data.data
            dispatch(loginUserAC(id,email,login, true))
         }
      })
   )
}

export default headerReducer