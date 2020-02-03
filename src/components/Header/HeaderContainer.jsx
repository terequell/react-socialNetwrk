import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {loginUserAC, checkLoginUserThunkCreator, logoutUserThunk} from '../../redux/headerReducer'
class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.checkLoginUserThunkCreator()
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


export default connect(mapStateToProps, {loginUserAC, checkLoginUserThunkCreator, logoutUserThunk})(HeaderContainer)