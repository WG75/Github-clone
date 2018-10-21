import axios from 'axios';
import {
  LOADING_SEARCH_RESULTS,
  SUCCESS_SEARCH,
  ERROR_SEARCH,
  CLEAR_SEARCH_RESULTS,
} from './constants';
import apiService from '../../config/apiService';


const searchUsers = (query, page) => async (dispatch) => {
  try {
    if (!query) {
      return dispatch(clearResults());
    }
    dispatch(loading(query));
    const response = await axios.get(`${apiService}/github/search/users?q=${query}&page=${page}`);
    dispatch(searchSuccess(response.data.results, page, response.data.pagination));
  } catch (err) {
    console.log(err)
    dispatch(searchError());
  }
};

const clearResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});
const loading = query => ({
  type: LOADING_SEARCH_RESULTS,
  query,
});

const searchSuccess = (results, page, pagination) => ({
  type: SUCCESS_SEARCH,
  results,
  page,
  pagination,
});

const searchError = () => ({ type: ERROR_SEARCH });

export {
  searchUsers, loading, searchSuccess, searchError,
};
