import { LOADING_USER_EVENTS, SUCCESS_USER_EVENTS, ERROR_USER_EVENTS } from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

const userEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER_EVENTS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_USER_EVENTS:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        data: [],
      };

    case SUCCESS_USER_EVENTS:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        data: action.events,
      };

    default:
      return state;
  }
};

export default userEventsReducer;
