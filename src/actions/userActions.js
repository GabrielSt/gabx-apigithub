import { USER_FETCHED, USER_REQUESTED, REQUEST_USER_FAILED } from "./constants";
import axios from "axios";
import toastr from "toastr";

function getUser(name) {
  return dispatch =>
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(resp => {
        dispatch(receiveUser(resp));
      })
      .catch(err => {
        if (err.response != null) {
          toastr.error(err.response.data.message);
        } else {
          toastr.error(err);
        }
        dispatch(requestUserFailed());
      });
}

function userRequested() {
  return {
    type: USER_REQUESTED
  };
}

function receiveUser(user) {
  return {
    type: USER_FETCHED,
    payload: user
  };
}

function requestUserFailed() {
  return {
    type: REQUEST_USER_FAILED
  };
}

export function requestUser(name) {
  return [userRequested(), getUser(name)];
}
