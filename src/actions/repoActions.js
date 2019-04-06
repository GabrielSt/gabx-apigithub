import { REPO_LIST_FETCHED, REPO_FETCHED, CHANGE_SORT_REPOS, CHANGE_REPOS_PAGE } from './constants';
import axios from 'axios';
import toastr from 'toastr';

export function requestRepoList(name) {
    return dispatch => dispatch(fetchUserReposPage(name, 1));
  }

  function fetchUserReposPage(userName, page) {
    return dispatch =>
      axios.get(`https://api.github.com/users/${userName}/repos?page=${page}`)
        .then(json => {
          
          // In order to get all user's repos, we iterate through pages 
          // until we get an empty array or the page number exceeds 40.
            const data = json.data;
          if (Array.isArray(data) && data.length > 0) {
  
            // Reset active pagination page to 1 if we successfully loaded new user repos
            if (page === 1) {
              dispatch(changeActivePage(1));
              dispatch(changeReposSortBy("name"));
            }
  
            dispatch(receiveUserRepos(data, (page > 1)));
  
            if (page < 40) {
              dispatch(fetchUserReposPage(userName, page + 1));
            }
          }
          else {
            // Array is empty. This means no more data. So sort repos list by popularity.
            dispatch(sortRepos("stars"));
          }
        })
        .catch(err => { toastr.error(err); });
  }

  export function sortRepos(field) {
    return (dispatch, getState) => {
      const { repositories } = getState();
      const { repoList } = repositories;
  
      dispatch(changeReposSortBy(field));
      const sortedRepos = repoList.slice();
  
      if (field === "name") {
        sortedRepos.sort((x, y) => x.name.localeCompare(y.name));
      }
  
      if (field === "stars") {
        sortedRepos.sort((x, y) => y.stargazers_count - x.stargazers_count);
      }
  
      if (field === "forks") {
        sortedRepos.sort((x, y) => y.forks_count - x.forks_count);
      }    
  
      dispatch(receiveUserRepos(sortedRepos, false));    
    }
  }

  function changeReposSortBy(field) {
    return {
      type: CHANGE_SORT_REPOS,
      sortBy: field,
    };
  }

  export function changeActivePage(page) {
      console.log(page);
    return {
      type: CHANGE_REPOS_PAGE,
      activePage: page,
    };
  }

export function receiveUserRepos(repos, addFlag)
{
  return {
  	type: REPO_LIST_FETCHED,
  	repos,
    addFlag,
  };
}