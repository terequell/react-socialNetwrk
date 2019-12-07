import {createStore, combineReducers, applyMiddleware} from 'redux'
import messageReducer from './messageReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import headerReducer from './headerReducer'
import thunkMW from 'redux-thunk'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messageReducer,
   usersPage: usersReducer,
   header: headerReducer
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store

export default store