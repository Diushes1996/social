import { connect } from 'react-redux'
import { addMessage, onMessageChange } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

// const DialogsContainer = (props) => {

//     console.log(props.state)

//     let addMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     }

//     let onMessageChange = (text) => {
//         props.dispatch(updateNewMessageTextCreator(text))
//     }

//     return (
//         <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} state={props.state}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        state: state,
        newMessageText: state.dialogsPage.newMessageText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         onMessageChange: (text) => {
//             dispatch(updateNewMessageTextCreator(text))
//         }
//     }
// }

const DialogsContainer = connect (mapStateToProps, {addMessage, onMessageChange})(Dialogs)

export default DialogsContainer;