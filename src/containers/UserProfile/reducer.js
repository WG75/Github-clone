import { LOADING_PROFILE, SUCCESS_PROFILE, ERROR_PROFILE } from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PROFILE:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_PROFILE:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        data: null,
      };

    case SUCCESS_PROFILE:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        data: action.profile,
      };

    default:
      return state;
  }
};

export default userProfileReducer;
