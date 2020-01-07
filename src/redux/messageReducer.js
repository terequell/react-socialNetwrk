const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const messageReducer = (state = initialState, action) => {
   switch (action.type) {
      case(ADD_MESSAGE): {
         let newMessage = {
            id: state.messagesElements.length + 1,
            item: action.text,
         }

         return {
            ...state,
            messagesElements: [...state.messagesElements, newMessage],

         }
      }

      default: 
         return state
   }
}

export const addMessageAction = (text) => {
   return ({
      type: ADD_MESSAGE,
      text: text
   })
}

export default messageReducer