import appReducer from '../../containers/App/reducer';
import * as actions from '../../containers/App/actions';

const initialState = {
  user: null,
};

describe('app reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle LOAD_USER', () => {
    expect(appReducer(initialState, actions.loadUser({ username: 'wg' }))).toEqual({
      user: { username: 'wg' },
    });
  });
});
