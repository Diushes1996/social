import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    let dialogElements = [props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)]

    let messageElements = [props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)]

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