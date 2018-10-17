import configureStore from 'redux-mock-store';
import * as actions from '../../containers/App/actions';
import * as types from '../../containers/App/constants';

const mockStore = configureStore();
const store = mockStore({ global: {} });

describe('load user', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches LOAD_USER after a successful login', () => {
    store.dispatch(actions.loadUser({ username: 'wg' }));

    const expectedActions = [{ type: types.LOAD_USER, user: { username: 'wg' } }];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
