import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import reposReducer from './containers/Repos/reducer';
import userEventsReducer from './containers/UserEvents/reducer';
import searchResults from './containers/Search/reducer';
import userProfileReducer from './containers/UserProfile/reducer';

export default combineReducers({
  global: appReducer,
  login: loginReducer,
  repos: reposReducer,
  userEvents: userEventsReducer,
  search: searchResults,
  profile: userProfileReducer,
});
