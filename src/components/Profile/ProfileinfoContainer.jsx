import {connect} from 'react-redux'
import Profileinfo from './Profileinfo'
import {AddPostAction, updatePostAction} from '../../redux/profileReducer'

let mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onChangePost:(text) => {
         dispatch(updatePostAction(text))
      },
      onAddPost: () => {
         dispatch(AddPostAction())
      }
   }
}

const ProfileinfoContainer = connect(mapStateToProps, mapDispatchToProps)(Profileinfo)

export default ProfileinfoContainer