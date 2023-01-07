import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/state'

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    let dialogElements = [props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)]

    let messageElements = [props.state.messages.map(m => <Message message={m.message} id={m.id} />)]

    return (
        <div className={s.dialogs}>
            <div className={s.userItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;