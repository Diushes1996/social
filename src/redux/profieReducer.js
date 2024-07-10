const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "Hi how are you?", likesCount: 12, followers: 11 },
        { id: 2, message: "It's my first project", likesCount: 18 },
        { id: 3, message: "Bla-bla", likesCount: 7 },
        { id: 4, message: "Da-da", likesCount: 1 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state, //делаем поверхностную копию state
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }], //делаем копию всех постов и добавлем новый пост в массив в виде объекта (его кстати можно вынести в отдельную переменную)
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, //делаем поверхностную копию стейта
                newPostText: action.newText // остлеживаем изменение value в input
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

}

export const addPost = () => ({ type: 'ADD-POST' });
export const onPostChange = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile });

export default profileReducer;