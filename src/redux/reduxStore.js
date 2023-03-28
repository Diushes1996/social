import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profieReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

console.log(store);

export default store;