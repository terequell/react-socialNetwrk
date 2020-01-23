import {checkLoginUserThunkCreator} from './headerReducer'

const SET_INITIALIZE = 'SET_INITIALIZE'

let initialState = {
   initialised:false
}

const appReducer = (state = initialState, action) => {
   if (action.type === SET_INITIALIZE) {
      return {
         ...state,
         initialised: true
      }
   }
   else return state
}

export const setInitializeAC = () => {
   return ({
      type: SET_INITIALIZE
   })
}

export const initializeApp = () => (dispatch) => {
   dispatch(checkLoginUserThunkCreator())
      .then(() => {
         dispatch(setInitializeAC())
      })
}  

export default appReducer