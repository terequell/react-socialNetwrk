import {usersAPI} from '../components/api/requests'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const TOTAL_COUNT = 'TOTAL-COUNT'
const LOADING = 'LOADING'
const TRY_FOLLOW = 'TRY-FOLLOW'


let initialState = {
    users: [],
    usersOnPage: 40,
    currentPage: 1,
    totalCount: 0,
    isLoading: false,
    triedFollow:[]
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
         return {...state, users: action.users}
      }

      case CHANGE_PAGE: {
         return {...state, currentPage: action.pageNum}
      }

      case TOTAL_COUNT: {
         return {
            ...state, totalCount: action.totalCount
         }
      }

      case LOADING: {
         return {
            ...state, isLoading: action.loadingFlag
         }
      }

      case TRY_FOLLOW: {
         return {
            ...state,
            triedFollow: action.TFBool ? [...state.triedFollow, action.userId] 
            : state.triedFollow.filter( id => id !== action.userId)
         }
      }

      default:
         return state
   }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const changePageAC = (pageNum) => ({type: CHANGE_PAGE, pageNum})
export const setTotalCountAC = (totalCount) => ({type: TOTAL_COUNT, totalCount})
export const setLoadingFlagAC = (loadingFlag) => ({type: LOADING, loadingFlag})
export const tryFollowAC = (TFBool, userId) => ({type: TRY_FOLLOW, TFBool, userId})

export const getUsersTnunkCreator = (usersOnPage, currentPage) => (dispatch) => {
   dispatch(setLoadingFlagAC(true))
   usersAPI.getUsersFromServer(usersOnPage, currentPage)
      .then(response => {
         dispatch(changePageAC(currentPage))
         dispatch(setTotalCountAC(response.data.totalCount))
         dispatch(setUsersAC(response.data.items))
         dispatch(setLoadingFlagAC(false))
      })
}

export const UnfollowUserThunkCreator = (userId) => (dispatch) => {
   dispatch(tryFollowAC(true, userId))
   usersAPI.toUnfollowUserRequest(userId)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(unFollowAC(userId))
            dispatch(tryFollowAC(false, userId))
         }
      })
}

export const FollowUserThunkCreator = (userId) => (dispatch) => {
   dispatch(tryFollowAC(true, userId))
   usersAPI.startFollowUserRequest(userId)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(followAC(userId))
            dispatch(tryFollowAC(false, userId))
         }
      })
}

export default userReducer