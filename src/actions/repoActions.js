import { REPO_LIST_FETCHED, REPO_FETCHED } from './constants';
import axios from 'axios';
import toastr from 'toastr';

export function requestRepoList(name) {
    return dispatch => 
        axios.get(`https://api.github.com/users/${name}/repos`)
        .then(resp => {
            dispatch(receiveRepoList(resp));
        })
        .catch(err => {
            console.log(err);
            // toastr.error(err.response.data.message); 
        });
  }


function receiveRepoList(repoList) {
    return {
      type: REPO_LIST_FETCHED,
      payload: repoList,
    };
  }