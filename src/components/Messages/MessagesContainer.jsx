import Messages from './Messages'
import {addMessageAction, updateMessageAction} from '../../redux/messageReducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onUpdateMessage: (text) => {
         dispatch(updateMessageAction(text))
      },
      onAddMessage: () => {
         dispatch(addMessageAction())
      }
   }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;