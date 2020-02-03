import {dialogsAPI} from '../components/api/requests'

const SET_USER_DIALOGS = 'SET-USER-DIALOGS'
const START_NEW_DIALOG = 'START-NEW-DIALOG'
const SET_CURRENT_MESSAGES = 'SET-CURRENT-MESSAGES'
const CHANGING_MESSAGES = 'CHANGING--MESSAGES'

let initialState = {
   dialogs: null,
   currentMessages: null,
   changingMessages:false
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DIALOGS: {
         return ({
            ...state,
            dialogs: action.dialogs
         })
      }

      case SET_CURRENT_MESSAGES: {
         return ({
            ...state,
            currentMessages: action.messages
         })
      }

      case CHANGING_MESSAGES: {
         return ({
            ...state,
            changingMessages: action.value
         })
      }
      default:
         return state
   }
}

export const setUserDialogsAC = (dialogs) => {
   return ({
      type: SET_USER_DIALOGS,
      dialogs: dialogs
   })
}

export const setCurrentMessagesAC = (messages) => {
   return ({
      type: SET_CURRENT_MESSAGES,
      messages: messages
   })
}

export const setChangingMessagesAC = (value) => {
   return ({
      type: CHANGING_MESSAGES,
      value: value
   })
}

export const startDialogThunkCreator = (userId) => async (dispatch) => {
   const response = await dialogsAPI.startDialog(userId)
   if (response.data.resultCode === 0) {
      dispatch(getUserDialogsThunkCreator())
   }
}

export const getUserDialogsThunkCreator = () => async (dispatch) => {
   const response = await dialogsAPI.getUserDialogs()
   if (response.status === 200) {
      dispatch(setUserDialogsAC(response.data))
   }
}  

export const getMessagesWithUserThunkCreator = (userId) => async (dispatch) => {
   dispatch(setChangingMessagesAC(true))
   const response = await dialogsAPI.getMessagesWithUser(userId)
   if (response.status === 200) {
      dispatch(setCurrentMessagesAC(response.data.items))
      dispatch(setChangingMessagesAC(false))
   }
}

export const sendNewMessageToUser = (userId, message) => async (dispatch) => {
   const response = await dialogsAPI.sendNewMessageToUser(userId, message)
   if (response.data.resultCode === 0) {
      dispatch(getMessagesWithUserThunkCreator(userId))
   }
   
}

export default dialogsReducer