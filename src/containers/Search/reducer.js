import { LOADING_SEARCH_RESULTS, SUCCESS_SEARCH, ERROR_SEARCH } from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  results: [],
  isFocused: false,
  query: '',
  page: 0,
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCH_RESULTS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };

    case ERROR_SEARCH:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
      };

    case SUCCESS_SEARCH:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        results: action.page > state.page ? state.results.concat(action.results) : action.results,
        page: action.page,
      };

    default:
      return state;
  }
};

export default searchResults;
