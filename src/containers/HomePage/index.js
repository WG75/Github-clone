// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import {} from './actions';

type Props = {
  loading: boolean,
  error: boolean,
  successfulAttempt: boolean,
  failedAttempt: boolean,
  user: any,
  authTypeUsed?: string,
  onLogin: (data: formData) => void,
};

class HomeScreen extends React.Component<Props> {
  render() {
    const { user } = this.props;
    return user ? <h1>hey user</h1> : <Redirect to="/login" />;
  }
}

function mapStateToProps(state: any) {
  return {
    user: state.global.user,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
