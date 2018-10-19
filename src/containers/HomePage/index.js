// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';
// import {} from './actions';

type Props = {
  user: any,
};

class HomeScreen extends React.Component<Props> {
  render() {
    const { user } = this.props;
    return user ? (
      <div className="home-container">
        <Nav avatar={user.avatar_url} username={user.login} admin={user.admin} />
      </div>
    ) : (
      <Redirect to="/login" />
    );
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
