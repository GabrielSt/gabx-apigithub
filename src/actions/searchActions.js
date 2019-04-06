import { USER_FETCHED, USER_REQUESTED } from './constants';
import axios from 'axios';
import toastr from 'toastr';

 function getUser(name) {
    return dispatch => 
        axios.get(`https://api.github.com/users/${name}`)
        .then(resp => {
            dispatch(receiveUser(resp));
        })
        .catch(err => {
            toastr.error(err.response.data.message); 
        });
  }


  function userRequested() {
    return {
      type: USER_REQUESTED,
    };
  }

  function receiveUser(user) {
    return {
      type: USER_FETCHED,
      payload: user,
    };
  }

  export function requestUser(name) {
    return [
        userRequested(),
        getUser(name),
    ]
}