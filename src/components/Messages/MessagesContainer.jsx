import Messages from './Messages'
import {addMessageAction} from '../../redux/messageReducer'
import {connect} from 'react-redux'
import withCheckLogin from '../HOC/withCheckLogin'
import { compose } from 'redux'

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onAddMessage: (text) => {
         dispatch(addMessageAction(text))
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withCheckLogin
)(Messages)