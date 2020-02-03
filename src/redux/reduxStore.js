import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import headerReducer from './headerReducer'
import appReducer from './appReducer'
import dialogsReducer from './dialogsReducer'
import thunkMW from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profilePage: profileReducer,
   usersPage: usersReducer,
   header: headerReducer,
   form: formReducer,
   app: appReducer,
   dialogs: dialogsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)))

window.store = store

export default store