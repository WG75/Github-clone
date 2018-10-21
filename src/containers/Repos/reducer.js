import { LOADING_REPOS, SUCCESS_REPOS, ERROR_REPOS } from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: [],
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_REPOS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_REPOS:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
        data: [],
      };

    case SUCCESS_REPOS:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        data: action.repos,
      };

    default:
      return state;
  }
};

export default reposReducer;
