// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
import profileReducer from "./profieReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _callSubscriber() {
        console.log('State changed')
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you?", likesCount: 12, followers: 11},
                {id: 2, message: "It's my first project", likesCount: 18},
                {id: 3, message: "Bla-bla", likesCount: 7},
                {id: 4, message: "Da-da", likesCount: 1}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'}
            ],
            newMessageText: ''
        }
    },

    getState(){
        return this._state
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
}

// export const addPostActionCreator = () => ({type: 'ADD-POST'});
// export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
// export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
// export const updateNewMessageTextCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
export default store;