import {
  LOADING_RECEIVED_EVENTS,
  SUCCESS_RECEIVED_EVENTS,
  ERROR_RECEIVED_EVENTS,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

const receivedEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RECEIVED_EVENTS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_RECEIVED_EVENTS:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        data: [],
      };

    case SUCCESS_RECEIVED_EVENTS:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        data: action.eventsData,
      };

    default:
      return state;
  }
};

export default receivedEventsReducer;
