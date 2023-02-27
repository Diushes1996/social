import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    console.log(props.state)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} state={props.state}/>
    )
}

export default DialogsContainer;