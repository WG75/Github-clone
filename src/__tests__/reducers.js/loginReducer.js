import loginReducer from '../../containers/LoginScreen/reducer';
import * as actions from '../../containers/LoginScreen/actions';

const initialState = {
  loading: false,
  error: false,
  successfulAttempt: false,
  failedAttempt: false,
  authTypeUsed: null,
};

describe('login reducer', () => {
  it('renders the initial state when passing undefined as state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it('it should handle LOADING_LOGIN', () => {
    expect(loginReducer(initialState, actions.loading())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('it should handle SUCCESSFUL_LOGIN', () => {
    expect(
      loginReducer(
        {
          loading: true,
          error: false,
          successfulAttempt: false,
          failedAttempt: false,
          authTypeUsed: null,
        },
        actions.loginSuccess(),
      ),
    ).toEqual({
      loading: true,
      error: false,
      successfulAttempt: true,
      failedAttempt: false,
      authTypeUsed: null,
      loading: false,
    });
  });

  it('it should handle FAILED_LOGIN', () => {
    expect(
      loginReducer(
        {
          loading: true,
          error: false,
          successfulAttempt: false,
          failedAttempt: false,
        },
        actions.loginFailed(),
      ),
    ).toEqual({
      error: false,
      successfulAttempt: false,
      failedAttempt: true,
      loading: false,
    });
  });
});
