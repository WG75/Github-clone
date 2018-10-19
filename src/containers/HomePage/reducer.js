import {
  FAILED_LOGIN, SUCCESSFUL_LOGIN, ERORR_LOGIN, LOADING_LOGIN,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  successfulAttempt: false,
  failedAttempt: false,
  authTypeUsed: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LOGIN:
      return { ...state, loading: true };

    case ERORR_LOGIN:
      return {
        ...state,
        error: true,
        failedAttempt: false,
        successfulAttempt: false,
        loading: false,
      };

    case FAILED_LOGIN:
      return {
        ...state,
        failedAttempt: true,
        error: false,
        successfulAttempt: false,
        loading: false,
        authTypeUsed: action.authType
      };

    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        successfulAttempt: true,
        failedAttempt: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
