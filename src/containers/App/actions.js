import { LOAD_USER } from './constants';

const loadUser = user => ({
  type: LOAD_USER,
  user,
});
export { loadUser };
