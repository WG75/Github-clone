// @flow

import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from '../Login';
import ProfileScreen from '../../components/ProfileScreen';

import HomeScreen from '../../components/HomeScreen';

class App extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <HomeScreen user={user} />} />
          <Route
            path="/profile/:profile"
            component={props => <ProfileScreen user={user} {...props} />}
          />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
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
)(App);
