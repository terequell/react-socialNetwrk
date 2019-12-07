const UPDATE_POST = 'UPDATE-POST'
const ADD_POST = 'ADD-POST'
const SET_CURRENT_USER = 'SET-CURRENT-USER'

let initialState = {
   postsContent: [
      {id: 1, likes: 14, text: 'First post'},
      {id: 2, likes: 88, text: 'Second post'},
      {id: 3, likes: 2, text: 'Third post'}
   ],
   currentPost: '',
   currentUser: null

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

      case SET_CURRENT_USER: {
         return {
            ...state,
            currentUser: action.user
         }
      }
      default: 
         return state
   }
}

export const AddPostAC = () => {
   return ({
      type: ADD_POST
   })
}

export const updatePostAC = (text) => {
   return ({
      type: UPDATE_POST,
      text: text
   })
}

export const setCurrentUserAC = (user) => {
   return ({
      type: SET_CURRENT_USER,
      user: user
   })
}

export default profileReducer