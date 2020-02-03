import {usersAPI, profileAPI} from '../components/api/requests'
import { stopSubmit } from 'redux-form'
const ADD_POST = 'ADD-POST'
const SET_CURRENT_USER = 'SET-CURRENT-USER'
const SET_CURRENT_USER_STATUS = 'SET-CURRENT-USER-STATUS'
const SET_USER_PHOTOS = 'SET-USER-PHOTOS'
const SUCSECCFULLY_SETTED = 'SUCSECCFULLY-SETTED'

let initialState = {
   postsContent: [
      {id: 1, likes: 14, text: 'First post'},
      {id: 2, likes: 88, text: 'Second post'},
      {id: 3, likes: 2, text: 'Third post'}
   ],
   currentUser: null,
   currentUserStatus: '',
   succesesfullySetted: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: state.postsContent.length + 1,
            likes: 0,
            text: action.postText
         }
      return {
         ...state,
         postsContent: [...state.postsContent, newPost],
         }
      }

      case SET_CURRENT_USER: {
         return {
            ...state,
            currentUser: action.user
         }
      }

      case SET_CURRENT_USER_STATUS: {
         return {
            ...state,
            currentUserStatus: action.status
         }
      }

      case SET_USER_PHOTOS: {
         return {
            ...state,
            currentUser: {...state.currentUser, photos: action.photos} 
         }
      }

      case SUCSECCFULLY_SETTED: {
         return {
            ...state,
            succesesfullySetted: action.value
         }
      }

      default: 
         return state
   }
}

export const AddPostAC = (text) => {
   return ({
      type: ADD_POST,
      postText: text
   })
}

export const setCurrentUserAC = (user) => {
   return ({
      type: SET_CURRENT_USER,
      user: user
   })
}

export const setCurrentUserStatusAC = (status) => {
   return ({
      type: SET_CURRENT_USER_STATUS,
      status: status
   })
}

export const setUserPhotosAC = (photos) => {
   return ({
      type: SET_USER_PHOTOS,
      photos: photos
   })
}

export const setSuccesfullEditAboutAC = (value) => {
   return ({
      type: SUCSECCFULLY_SETTED,
      value: value
   })
}

export const getCurrentUserThunkCreator = (userId) => async (dispatch) => {
   const response = await usersAPI.getCurrentUser(userId)
   dispatch(setCurrentUserAC(response.data))
}

export const getCurrentUserStatusThunkCreator = (userId) => async (dispatch) => {
   const response = await profileAPI.getUserStatus(userId)
   dispatch(setCurrentUserStatusAC(response.data))
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
   if(response.data.resultCode === 0) {
      dispatch(setCurrentUserStatusAC(status))
   }
}

export const setPhotoThunkCreator = (photo) => async (dispatch) => {
   const response = await profileAPI.setPhoto(photo)
   if (response.data.resultCode === 0) {
      dispatch(setUserPhotosAC(response.data.data.photos))
   }
}

export const setNewAboutInfoThunkCreator = (newInfo) => async (dispatch, getState) => {
   dispatch(setSuccesfullEditAboutAC(false))
   const response = await profileAPI.setNewInfo(newInfo)
   if (response.data.resultCode === 0) {
      dispatch(getCurrentUserThunkCreator(getState().header.id))
      dispatch(setSuccesfullEditAboutAC(true))
   }
   else {
      dispatch(stopSubmit('profile_about', {_error: response.data.messages[0]}))
   }
}

export default profileReducer
