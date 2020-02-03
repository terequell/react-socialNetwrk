import messageReducer from './messageReducer'
import profileReducer from './profileReducer'

let store  = {
   _reRenderEntireTree() {
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
            {id:2, text: 'Second message', likes: 11},
            {id:3, text: 'Third message', likes: 126},
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
      this._reRenderEntireTree = observer
   },

   dispatch(action) {
      this._state.messagesPage = messageReducer(this._state.messagesPage, action)
      this._state.profilePage = profileReducer(this._state.profilePage, action)

      this._reRenderEntireTree(this._state)
   },
} 
 
export default store  