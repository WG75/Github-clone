import axios from 'axios';
import { LOADING_RECEIVED_EVENTS, SUCCESS_RECEIVED_EVENTS, ERROR_RECEIVED_EVENTS } from './constants';
import apiService from '../../config/apiService';

const getReceivedEvents = user => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await axios.get(`${apiService}/github/${user}/received_events`);
    dispatch(EventsSuccess(response.data.top10));
  } catch (err) {
    dispatch(EventsError());
  }
};

const loading = () => ({
  type: LOADING_RECEIVED_EVENTS,
});

const EventsSuccess = eventsData => ({ type: SUCCESS_RECEIVED_EVENTS, eventsData });
const EventsError = () => ({ type: ERROR_RECEIVED_EVENTS });

export {
  getReceivedEvents, loading, EventsError, EventsSuccess,
};
