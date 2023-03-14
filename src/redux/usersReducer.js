const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a super hero', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Andrew', status: 'I hate apples', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, followed: true, fullName: 'Alex', status: 'I am a looser', location: {city: 'Baranovichi', country: 'USA'}}
    ]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })],
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })],
            }
            case SET_USERS:
                return {
                    ...state, users: [...state.users, ...action.users]
                }
        default:
             return state;
    }
}

export const followActionCreator = (userId) => ({type: 'FOLLOW', userId});
export const unfollowActionCreator = (userId) => ({type: 'UNFOLLOW', userId});
export const setUsers = (users) => ({type: 'SET_USERS', users});

export default usersReducer;