const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {
   messagesData: [
      {id:1, name:'Alexey'},
      {id:2, name:'Ivan'},
      {id:3, name:'Dmitry'},
      {id:4, name:'Paul'},
      {id:5, name:'Boris'},
   ],
   messagesElements: [
      {id:1, item:'Hello'},
      {id:2, item:'message1'},
      {id:3, item:'message2'},
      {id:4, item:'message3'},
      {id:5, item:'message5'},
   ],
   currentMessage: '',
}

const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case(ADD_MESSAGE): {
         let newMessage = {
            id: 6,
            item: state.currentMessage,
         }

         return {
            ...state,
            messagesElements: [...state.messagesElements, newMessage],
            currentMessage: ''
         }
      }
      
      case (UPDATE_MESSAGE): {
         return {
            ...state,
            currentMessage : action.text
         }
      }

      default: 
         return state
   }
}

export const addMessageAction = () => {
   return ({
      type: ADD_MESSAGE,
   })
   
}

export const updateMessageAction = (text) => {
   return ({
      type: UPDATE_MESSAGE,
      text: text
   })
}

export default messageReducer