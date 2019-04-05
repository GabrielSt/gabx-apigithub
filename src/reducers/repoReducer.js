import { REPO_LIST_FETCHED, REPO_FETCHED } from '../actions/constants';

const initialState = {
    repoList: [],
    currentRepositorie: {}
}

function repoReducer(state = initialState, action) {
    switch(action.type) {
        case REPO_LIST_FETCHED:
            return {
                ...state,
                repoList: action.payload.data
            }
        case REPO_FETCHED:
            return {
                ...state,
                currentRepositorie: action.payload.data
            }
        default:
            return state;
    }
}

export default repoReducer;