import axios from 'axios';
import { LOADING_SEARCH_RESULTS, SUCCESS_SEARCH, ERROR_SEARCH } from './constants';
import apiService from '../../config/apiService';

const searchUsers = (query, page) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/search/users?q=${query}&page=${page}`);
    dispatch(searchSuccess(response.data.results, page));
  } catch (err) {
    dispatch(searchError());
  }
};

const loading = () => ({
  type: LOADING_SEARCH_RESULTS,
});

const searchSuccess = (results, page) => ({ type: SUCCESS_SEARCH, results, page });

const searchError = () => ({ type: ERROR_SEARCH });

export {
  searchUsers, loading, searchSuccess, searchError,
};
