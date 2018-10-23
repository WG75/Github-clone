// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';
import LoginPanel from '../../components/LoginPanel';
import { type formData } from '../../components/LoginPanel';

type Props = {
  loading: boolean,
  error: boolean,
  successfulAttempt: boolean,
  failedAttempt: boolean,
  user: any,
  authTypeUsed?: string,
  onLogin: (data: formData) => void,
};

class LoginScreen extends React.Component<Props> {
  render() {
    const {
      loading,
      error,
      failedAttempt,
      user,
      onLogin,
      authTypeUsed,
    } = this.props;
    return !user ? (
      <LoginPanel
        title="Github Insights"
        hint="Please login to get insights for your github account."
        logo="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg"
        error={error}
        loading={loading}
        errorMessage="something went wrong, please try again."
        failedLoginMessage="username or password is invalid. please try again."
        failedLogin={failedAttempt}
        authTypeUsed={authTypeUsed}
        onSubmit={onLogin}
      />
    ) : (
      <Redirect to="/" />
    );
  }
}

function mapStateToProps(state: any) {
  return {
    loading: state.login.loading,
    error: state.login.error,
    successfulAttempt: state.login.successfulAttempt,
    failedAttempt: state.login.failedAttempt,
    authTypeUsed: state.login.authTypeUsed,
    user: state.global.user,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onLogin: data => dispatch(login(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
