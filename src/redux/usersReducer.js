const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  user.followed = true
               }
               return user
            })
         }
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  user.followed = false
               }
               return user
            })
         }
      }

      case SET_USERS: {
         return {...state, users: [...state.users, ...action.users]}
      }

      default:
         return state
   }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAcionCreator = (users) => ({type: SET_USERS, users})

export default userReducer