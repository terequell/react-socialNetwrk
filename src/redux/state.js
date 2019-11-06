const ADD_POST_ITEM = 'ADD-POST-ITEM'
const UPDATE_POST = 'UPDATE-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const createAddPostAction = () => {
   return {
      type: 'ADD-POST-ITEM'
   }
}

export const updatePost = (text) => {
   return {
      type: 'UPDATE-POST',
      message: text
   }
}

export const addMessageAction = () => {
   return {
      type: 'ADD-MESSAGE'
   }
}

export const updateMessageAction = (text) => {
   return {
      type: 'UPDATE-MESSAGE',
      message: text
   }
}

let store  = {
   reRenderEntireTree() {
   },
   _state: {
      messagesPage:{
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
      },
      profilePage:{
         postsContent:[
            {id:1, text: 'Sample text im my future socialnetwork', likes: 12},
            {id:2, text: 'Privet ti cho ', likes: 11},
            {id:3, text: 'Im the culturest man in the world', likes: 126},
            {id:4, text: 'hgdfhdfghdhcfghjdfg', likes: 8},
            {id:5, text: 'gnsdfj;gkhs;rgn;djfkhgsdf', likes: 8},
         ], 
         currentPost : '',
      }
   },

   getState() {
      return this._state;
   },

   subscribe (observer){
      this.reRenderEntireTree = observer
   },

   dispatch(action) {
      if (action.type === ADD_POST_ITEM) {
         let newPost =  {
            id: 6, 
            text: this._state.profilePage.currentPost, 
            likes: 0
         };
         this._state.profilePage.postsContent.push(newPost)
         this._state.profilePage.currentPost = ''
         this.reRenderEntireTree(this._state)
      } 

      else if (action.type === UPDATE_POST ) {
         this._state.profilePage.currentPost = action.message
         this.reRenderEntireTree(this._state)
      } 
      
      else if (action.type === ADD_MESSAGE) {
         let newMessage = {
            id: 6,
            item: this._state.messagesPage.currentMessage
         }
         this._state.messagesPage.messagesElements.push(newMessage)
         this._state.messagesPage.currentMessage = ''
         this.reRenderEntireTree(this._state)
      }

      else if (action.type === UPDATE_MESSAGE) {
         this._state.messagesPage.currentMessage = action.message
         this.reRenderEntireTree(this._state)
      }
   },
} 


 
export default store  