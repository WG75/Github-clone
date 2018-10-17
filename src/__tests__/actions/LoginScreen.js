import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import * as actions from '../../containers/LoginScreen/actions';
import { LOAD_USER } from '../../containers/App/constants';
import * as types from '../../containers/LoginScreen/constants';

const mockStore = configureStore([thunk]);
const axiosMock = new AxiosMockAdapter(axios);
const store = mockStore({ global: {} });

describe('submit login', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('dispatches LOGIN_SUCCESS when the response 200', () => {
    axiosMock.onPost('http://localhost:3000/api/auth/github').reply(200, {
      user: {},
    });

    const expectedActions = [
      { type: types.LOADING_LOGIN },
      { type: types.SUCCESSFUL_LOGIN },
      { type: LOAD_USER, user: {} },
    ];

    return store
      .dispatch(actions.login({ username: 'wg75', password: '4343434', admin: false }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
