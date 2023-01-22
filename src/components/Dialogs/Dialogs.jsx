import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { addMessageActionCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer'

const Dialogs = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
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
                <input onChange={onMessageChange} value={props.newMessageText} className={s.messageInput}/>
                <button onClick={addMessage} className={s.messageButton}>Send message</button>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;