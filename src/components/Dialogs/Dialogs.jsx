import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

    let textMessage = React.createRef();

    let addTextMessage = () => {
        let text = textMessage.current.value;
        alert(text)
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
                <textarea ref={textMessage}></textarea>
                <button onClick={addTextMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;