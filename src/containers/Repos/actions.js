import axios from 'axios';
import { LOADING_REPOS, SUCCESS_REPOS, ERROR_REPOS } from './constants';
import apiService from '../../config/apiService';

const getRepos = user => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/${user}/repos`);
    dispatch(reposSuccess(response.data.repos));
  } catch (err) {
    dispatch(reposError());
  }
};

const loading = () => ({
  type: LOADING_REPOS,
});

const reposSuccess = repos => ({ type: SUCCESS_REPOS, repos });
const reposError = () => ({ type: ERROR_REPOS });

export {
  getRepos, loading, reposSuccess, reposError,
};
