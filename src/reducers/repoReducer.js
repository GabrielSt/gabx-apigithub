import { REPO_LIST_FETCHED, REPO_FETCHED, CHANGE_SORT_REPOS, CHANGE_REPOS_PAGE } from '../actions/constants';

const initialState = {
    repoList: [],
    currentRepositorie: {},
    activePage: 1,
    sortBy: "stars",
}

function repoReducer(state = initialState, action) {
    switch(action.type) {
        case REPO_LIST_FETCHED:
            const repos = action.addFlag ? state.repoList.concat(action.repos) : action.repos;
            return {
                ...state,
                repoList: repos
            }
        case CHANGE_REPOS_PAGE:
            return {
                ...state,
                activePage: action.activePage
            }
        case CHANGE_SORT_REPOS:
            return {
                ...state,
                sortBy: action.sortBy
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