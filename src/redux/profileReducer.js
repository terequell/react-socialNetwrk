import {usersAPI, profileAPI} from '../components/api/requests'
const ADD_POST = 'ADD-POST'
const SET_CURRENT_USER = 'SET-CURRENT-USER'
const SET_CURRENT_USER_STATUS = 'SET-CURRENT-USER-STATUS'

let initialState = {
   postsContent: [
      {id: 1, likes: 14, text: 'First post'},
      {id: 2, likes: 88, text: 'Second post'},
      {id: 3, likes: 2, text: 'Third post'}
   ],
   currentUser: null,
   currentUserStatus: '',

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

export const getCurrentUserThunkCreator = (userId) => (dispatch) => {
   usersAPI.getCurrentUser(userId)
      .then((response) => {
         dispatch(setCurrentUserAC(response.data))
      })
}

export const getCurrentUserStatusThunkCreator = (userId) => (dispatch) => {
   profileAPI.getUserStatus(userId)
      .then((response) => {
         dispatch(setCurrentUserStatusAC(response.data))
      })
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
      .then((response) => {
         if(response.data.resultCode === 0) {
            dispatch(setCurrentUserStatusAC(status))
         }
      })
}

export default profileReducer
