import profileReducer from "./profieReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebarPage: {

        }
    },

    getState(){
        return this._state
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  //action это объект содержащий свойство type
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage);

        this._callSubscriber(this._state)
    }
}

export default store;