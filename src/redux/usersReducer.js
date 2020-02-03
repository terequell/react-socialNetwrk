import {usersAPI} from '../components/api/requests'
import {mapMethod} from '../components/common/MapMethod'

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
            users: mapMethod(state.users, 'id', action.userId, {followed: true})
         }
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: mapMethod(state.users, 'id', action.userId, {followed: false})
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

export const getUsersTnunkCreator = (usersOnPage, currentPage) => async (dispatch) => {
   dispatch(setLoadingFlagAC(true))
   const response = await usersAPI.getUsersFromServer(usersOnPage, currentPage)
   dispatch(changePageAC(currentPage))
   dispatch(setTotalCountAC(response.data.totalCount))
   dispatch(setUsersAC(response.data.items))
   dispatch(setLoadingFlagAC(false))
}

const FlowFollowUnfollow = async (dispatch, apiMethod, userId, actionSet) => {
   dispatch(tryFollowAC(true, userId))
   const response = await apiMethod(userId)
   if (response.data.resultCode === 0) {
      dispatch(actionSet(userId))
      dispatch(tryFollowAC(false, userId))
   }
}

export const UnfollowUserThunkCreator = (userId) => async (dispatch) => {
   FlowFollowUnfollow(dispatch, usersAPI.startUnfollowUserRequest.bind(usersAPI), userId, unFollowAC)
}

export const FollowUserThunkCreator = (userId) => async (dispatch) => {
   FlowFollowUnfollow(dispatch, usersAPI.startFollowUserRequest.bind(usersAPI), userId, followAC)
}

export default userReducer