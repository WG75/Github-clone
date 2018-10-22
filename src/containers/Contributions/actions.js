import axios from 'axios';
import { LOADING_CONTRIBUTIONS, SUCCESS_CONTRIBUTIONS, ERROR_CONTRIBUTIONS } from './constants';
import apiService from '../../config/apiService';

const getContributions = user => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/${user}/statistics`);
    dispatch(contributionsSuccess(response.data.contributions));
  } catch (err) {
    dispatch(contributionsError());
  }
};

const loading = () => ({
  type: LOADING_CONTRIBUTIONS,
});

const contributionsSuccess = contributions => ({ type: SUCCESS_CONTRIBUTIONS, contributions });
const contributionsError = () => ({ type: ERROR_CONTRIBUTIONS });

export {
  getContributions, loading, contributionsError, contributionsSuccess,
};
