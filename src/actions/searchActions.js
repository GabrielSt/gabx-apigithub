import { USER_FETCHED } from './constants';
import axios from 'axios';
import toastr from 'toastr';

export function requestUser(name) {
    return dispatch => 
        axios.get(`https://api.github.com/users/${name}`)
        .then(resp => {
            dispatch(receiveUser(resp));
        })
        .catch(err => {
            toastr.error(err.response.data.message); 
        });
  }


  export function receiveUser(user) {
    return {
      type: USER_FETCHED,
      payload: user,
    };
  }