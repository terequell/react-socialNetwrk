import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {loginUserAC, checkLoginUserThunkCreator, logoutUserThunk} from '../../redux/headerReducer'
class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.checkLoginUserThunk()
   }
   
   render () {
      return(
         <Header {...this.props}/>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.header.isAuth,
      login: state.header.login
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      loginUser: (id,email,login) => {
         dispatch(loginUserAC(id,email,login))
      },
      checkLoginUserThunk: () => {
         dispatch(checkLoginUserThunkCreator())
      },
      logout: () => {
         dispatch(logoutUserThunk())
      }
   }
} 

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)