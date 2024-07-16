const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'first message'},
        {id: 2, message: 'second message'},
        {id: 3, message: 'third message'},
        {id: 4, message: 'yo1'},
        {id: 5, message: 'yo2'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
             return state;
    }
}

export const addMessage = () => ({type: 'ADD-MESSAGE'});
export const onMessageChange = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});

export default dialogsReducer;