import { LOAD_USER, LOGOUT } from './constants';

const loadUser = user => ({
  type: LOAD_USER,
  user,
});


const logout = () => ({type: LOGOUT})
export { loadUser, logout };
