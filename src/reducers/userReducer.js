import {
  USER_FETCHED,
  USER_REQUESTED,
  REQUEST_USER_FAILED
} from "../actions/constants";

const initialState = {
  currentUser: {},
  requestFailed: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        currentUser: {}
      };
    case USER_FETCHED:
      return {
        ...state,
        currentUser: action.payload.data,
        requestFailed: false
      };
    case REQUEST_USER_FAILED:
      return {
        ...state,
        requestFailed: true
      };
    default:
      return state;
  }
}

export default userReducer;
