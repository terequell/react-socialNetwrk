const UPDATE_POST = 'UPDATE-POST'
const ADD_POST = 'ADD-POST'

let initialState = {
   postsContent: [
      {id: 1, likes: 14, text: 'First post'},
      {id: 2, likes: 88, text: 'Second post'},
      {id: 3, likes: 2, text: 'Third post'}
   ],
   currentPost: '',

}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 4,
            likes: 0,
            text: state.currentPost
         }
      return {
         ...state,
         postsContent: [...state.postsContent, newPost],
         currentPost: ''
         }
      }
      case UPDATE_POST: {
         return {
            ...state,
            currentPost: action.text
         }
      }
      default: 
         return state
   }
}

export const AddPostAction = () => {
   return ({
      type: ADD_POST
   })
}

export const updatePostAction = (text) => {
   return ({
      type: UPDATE_POST,
      text: text
   })
}

export default profileReducer