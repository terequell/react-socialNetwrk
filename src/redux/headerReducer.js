import {authAPI} from '../components/api/requests'
import { stopSubmit } from 'redux-form'

const LOGIN_USER = 'LOGIN-USER'
const GET_CAPTCHA = 'GET-CAPTCHA'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null
}

const headerReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CAPTCHA: {
         return ({
            ...state,
            captchaUrl: action.captchaUrl
         })
      }

      case LOGIN_USER: {
         return ({
            ...state,
            ...action.data
         })
      }

      default:
         return state
   }
}

export const loginUserAC = (id,email,login, isAuth) => {
   return ({
      type: LOGIN_USER,
      data: {id,email,login, isAuth}
   })
}

export const getCaptchaAC = (url) => {
   return ({
      type:GET_CAPTCHA,
      captchaUrl: url
   })
}

export const loginUserThunk = (email, password, rememberMe, captchaSymbols) => async (dispatch) => {
   const response = await authAPI.logIn(email, password, rememberMe, captchaSymbols)
   if (response.data.resultCode === 0) {
      dispatch(checkLoginUserThunkCreator())
   }
   else if (response.data.resultCode === 10) {
      dispatch(getCaptchaThunkCreator())
   }
   else {
      dispatch(stopSubmit('loginForm', {_error: response.data.messages[0]}))
   }
}

export const logoutUserThunk = () => async (dispatch) => {
   await authAPI.logout()
   await dispatch(loginUserAC(null,null,null,false))
}

export const checkLoginUserThunkCreator = () => async (dispatch) => {
   const response = await authAPI.checkLoginMe()
   if (response.data.resultCode === 0) {
      let {login, id, email} = response.data.data
      dispatch(loginUserAC(id,email,login, true))
   }
}

export const getCaptchaThunkCreator = () => async (dispatch) => {
   const response = await authAPI.getCaptcha()
   dispatch(getCaptchaAC(response.data.url))
}

export default headerReducer