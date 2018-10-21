// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav';
import SideBar from '../SideBar';
import UsersResults from '../../containers/UsersResults';
import './HomeScreen.css';

type Props = {
  user: any,
};

class HomeScreen extends React.Component<Props> {
  render() {
    const { user } = this.props;
    return user ? (
      <div className="home-container">
        <Nav avatar={user.avatar_url} username={user.login} admin={user.admin} />
        <div className="home__content">
          <SideBar />
          <UsersResults />
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default HomeScreen;
