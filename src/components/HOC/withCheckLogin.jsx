import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
   isAuth: state.header.isAuth
})

let withCheckLogin = (Component) => {
   class withCheckLoginComponent extends React.Component{
      render(){
         if (!this.props.isAuth) {
            return <Redirect to = {'/login'}/>
         }
         return (
            <Component {...this.props}/>
         )
      }
   }
      
   return connect(mapStateToPropsForRedirect)(withCheckLoginComponent)
}

export default withCheckLogin