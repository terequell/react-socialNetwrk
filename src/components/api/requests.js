import * as axios from 'axios'

const samuraiAPI = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '90fa3851-9b2b-4daf-af74-fa44566f1736'
   }
})

export const usersAPI = {
   getUsersFromServer(usersOnPage = 20, pageNumber = 1) {
      return (
         samuraiAPI.get(`users?count=${usersOnPage}&page=${pageNumber}`)
      )
   },
   getCurrentUser(userId) {
      console.warn('This method will be replaces. Please, use "profileAPI.getCurrentUser"')
      return (
         profileAPI.getCurrentUser(userId)
      )
   },
   startFollowUserRequest(userId) {
      return (
         samuraiAPI.post(`follow/${userId}`)
      )
   },
   startUnfollowUserRequest(userId) {
      return (
         samuraiAPI.delete(`follow/${userId}`)
      )
   }
}

export const profileAPI = {
   getCurrentUser(userId) {
      return (
         samuraiAPI.get(`profile/${userId}`)
      )
   },

   getUserStatus(userId) {
      return (
         samuraiAPI.get(`profile/status/${userId}`)
      )
   },
   
   updateStatus(status) {
      return (
         samuraiAPI.put('profile/status', {
            status: status
         })
      )
   },
   
   setPhoto(photo) {
      const formData = new FormData();
      formData.append('image', photo)
      return (
         samuraiAPI.put('profile/photo', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
      )
   },

   setNewInfo(newInfo) {
      return (
         samuraiAPI.put('profile', newInfo)
      )
   }
}

export const authAPI = {
   checkLoginMe() {
      return (
         samuraiAPI.get(`auth/me`)
      )
   },

   logIn(email, password, rememberMe, captcha) {
      return (
         samuraiAPI.post('auth/login', {
            email, password, rememberMe, captcha
         })
      )
   }, 
   
   logout() {
      return (
         samuraiAPI.post('auth/logout')
      )
   },

   getCaptcha() {
      return (
         samuraiAPI.get('security/get-captcha-url')
      )
   }
}

export const dialogsAPI = {
   getUserDialogs() {
      return (
         samuraiAPI.get('dialogs')
      )
   },
   startDialog(userId) {
      return (
         samuraiAPI.put(`dialogs/${userId}`)
      )
   },
   getMessagesWithUser(userId) {
      return (
         samuraiAPI.get(`dialogs/${userId}/messages`)
      )
   },
   sendNewMessageToUser(userId, body) {
      return (
         samuraiAPI.post(`dialogs/${userId}/messages`, {
            body
         }) 
      )
   },
}