// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../App/actions';
import NavBar from '../../components/NavBar';

type Props = {
  user: any,
  onLogout: void => void,
  withResults: any,
  searchResults: Array<any>,
};

class Nav extends React.Component<Props> {
  render() {
    return <NavBar {...this.props} />;
  }
}

function mapStateToProps(state: any) {
  return {
    user: state.global.user,
    searchResults: state.search.results,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onLogout: () => dispatch(logout()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
