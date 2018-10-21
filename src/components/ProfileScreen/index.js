// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../Nav';
import SideBar from '../SideBar';
import UserProfile from '../../containers/UserProfile';
import Repos from '../../containers/Repos';

import './ProfileScreen.css';

type Props = {
  user: any,
};

class ProfileScreen extends React.Component<Props> {
  componentWillMount() {
    const profileName = this.props.match.params.profile;
  }

  render() {
    const { user } = this.props;
    const profileName = this.props.match.params.profile;

    return user ? (
      <div className="app__container">
        <Nav avatar={user.avatar_url} username={user.login} admin={user.admin} />
        <div className="app__content">
          <SideBar>
            <UserProfile className={"user--is-transparent"} profileName={profileName} />
            <Repos profile={profileName} />
          </SideBar>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default ProfileScreen;
