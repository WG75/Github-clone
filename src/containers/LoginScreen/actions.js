import axios from 'axios';
import {
  FAILED_LOGIN, SUCCESSFUL_LOGIN, ERORR_LOGIN, LOADING_LOGIN,
} from './constants';
import { loadUser } from '../App/actions';
import apiService from '../../config/apiService';

const login = data => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await axios.post(`${apiService}/auth/github`, data);
    dispatch(loginSuccess());
    dispatch(loadUser(response.data.user));
  } catch (err) {
    if (err.response.status === 401) {
      dispatch(loginFailed(data.authType));
    } else {
      dispatch(loginError());
    }
  }
};

const loading = () => ({
  type: LOADING_LOGIN,
});

const loginSuccess = () => ({ type: SUCCESSFUL_LOGIN });

const loginError = () => ({ type: ERORR_LOGIN });

const loginFailed = authType => ({
  type: FAILED_LOGIN,
  authType,
});
export {
  login, loading, loginSuccess, loginError, loginFailed,
};
