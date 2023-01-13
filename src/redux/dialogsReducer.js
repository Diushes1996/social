const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});

export default dialogsReducer;