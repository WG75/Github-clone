import axios from 'axios';
import { LOADING_PROFILE, SUCCESS_PROFILE, ERROR_PROFILE } from './constants';
import apiService from '../../config/apiService';

const loadProfile = user => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/users/${user}`);
    dispatch(profileSuccess(response.data.profile));
  } catch (err) {
    dispatch(profileError());
  }
};

const loading = () => ({
  type: LOADING_PROFILE,
});

const profileSuccess = profile => ({ type: SUCCESS_PROFILE, profile });
const profileError = () => ({ type: ERROR_PROFILE });

export {
  loadProfile, loading, profileSuccess, profileError,
};
