// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeScreen from '../../components/HomeScreen';

// import {} from './actions';
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
