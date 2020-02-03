import React, { useEffect } from 'react'
import Messages from './Messages'
import {startDialogThunkCreator, getUserDialogsThunkCreator} from '../../redux/dialogsReducer'
import {connect} from 'react-redux'
import withCheckLogin from '../HOC/withCheckLogin'
import { compose } from 'redux'
import {reset} from 'redux-form'
import { withRouter } from 'react-router-dom'
import Loading from '../common/Loading'


const MessagesContainer = React.memo((props) => {
   useEffect(() => {
      props.getUserDialogsThunkCreator()
   }, [])

   return (props.dialogs ? 
      <Messages {...props}/> : <Loading/>
   )
}
)

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogs.dialogs
   }
}

export default compose(
   withRouter,
   connect(mapStateToProps, {startDialogThunkCreator, getUserDialogsThunkCreator, reset}),
   withCheckLogin
)(MessagesContainer)