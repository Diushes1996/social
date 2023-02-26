import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profieReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

let store = createStore(reducers);

console.log(store)

export default store;