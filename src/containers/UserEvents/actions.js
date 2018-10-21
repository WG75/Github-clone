import axios from 'axios';
import { LOADING_USER_EVENTS, SUCCESS_USER_EVENTS, ERROR_USER_EVENTS } from './constants';
import apiService from '../../config/apiService';

const getUserEvents = user => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/${user}/events`);
    dispatch(userEventsSuccess(response.data.events));
  } catch (err) {
    dispatch(userEventsError());
  }
};

const loading = () => ({
  type: LOADING_USER_EVENTS,
});

const userEventsSuccess = events => ({ type: SUCCESS_USER_EVENTS, events });
const userEventsError = () => ({ type: ERROR_USER_EVENTS });

export {
  getUserEvents, userEventsSuccess, loading, userEventsError,
};
