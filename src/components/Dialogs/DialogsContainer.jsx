import { connect } from 'react-redux'
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
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
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;