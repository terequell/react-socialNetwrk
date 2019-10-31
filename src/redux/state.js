import {reRenderEntireTree} from '../render'

let state = {
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
      ]
   },
   profilePage:{
      postsContent:[
         {id:1, text: 'Sample text im my future socialnetwork', likes: 12},
         {id:2, text: 'Privet ti cho ', likes: 11},
         {id:3, text: 'Im the culturest man in the world', likes: 126},
         {id:4, text: 'hgdfhdfghdhcfghjdfg', likes: 8},
         {id:5, text: 'gnsdfj;gkhs;rgn;djfkhgsdf', likes: 8},
      ]
   }
}

export let addPostItem = (postMessage) => {
   let newPost =  {
      id: 6, 
      text: postMessage, 
      likes: 0
   };
   state.profilePage.postsContent.push(newPost)
   reRenderEntireTree(state)
}

export default state 