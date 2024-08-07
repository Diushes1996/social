import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
// import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    // usersPage: usersReducer,
    sidebarPage: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

console.log(store);

export default store;