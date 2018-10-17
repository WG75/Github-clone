import { LOAD_USER } from './constants';

const savedUser = JSON.parse(localStorage.getItem('savedUser'));

const initialState = {
  user: savedUser ? savedUser : null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      localStorage.setItem('savedUser', JSON.stringify(action.user));
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default appReducer;
