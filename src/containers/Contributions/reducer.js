import { LOADING_CONTRIBUTIONS, SUCCESS_CONTRIBUTIONS, ERROR_CONTRIBUTIONS } from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

const contributionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CONTRIBUTIONS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_CONTRIBUTIONS:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        data: [],
      };

    case SUCCESS_CONTRIBUTIONS:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        data: action.contributions,
      };

    default:
      return state;
  }
};

export default contributionsReducer;
