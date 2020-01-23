import {createStore, combineReducers, applyMiddleware} from 'redux'
import messageReducer from './messageReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import headerReducer from './headerReducer'
import appReducer from './appReducer'
import thunkMW from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messageReducer,
   usersPage: usersReducer,
   header: headerReducer,
   form: formReducer,
   app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store

export default store