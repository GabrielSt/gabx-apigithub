import { USER_FETCHED } from '../actions/constants';

const initialState = {
    currentUser: {}
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case USER_FETCHED:
            return {
                ...state,
                currentUser: action.payload.data
            }
        default:
            return state;
    }
}

export default userReducer;