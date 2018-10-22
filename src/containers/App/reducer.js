import { LOAD_USER, LOGOUT } from './constants';

const savedUser = JSON.parse(localStorage.getItem('savedUser'));

const initialState = {
  user: savedUser || null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      localStorage.setItem('savedUser', JSON.stringify(action.user));
      return { ...state, user: action.user };

    case LOGOUT:
      localStorage.removeItem('savedUser');
      return { ...state, user: null };

    default:
      return state;
  }
};

export default appReducer;
