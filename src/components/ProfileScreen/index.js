// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../../containers/Nav';
import SideBar from '../SideBar';
import UserProfile from '../../containers/UserProfile';
import Repos from '../../containers/Repos';
import Contributions from '../../containers/Contributions';
import ReceivedEvents from '../../containers/ReceivedEvents';
import './ProfileScreen.css';

type Props = {
  user: any,
};

class ProfileScreen extends React.Component<Props> {
  componentWillMount() {
    const profileName = this.props.match.params.profile;
  }

  render() {
    const { user, onLogout } = this.props;
    const profileName = this.props.match.params.profile;

    return user ? (
      <div className="app__container">
        <Nav withResults />
        <div className="app__content">
          <SideBar>
            <UserProfile className="user--is-profile" profileName={profileName} isProfile />
            <Repos profile={profileName} />
          </SideBar>
          <div className="app__main">
            <Contributions profileName={profileName} />
            <ReceivedEvents profileName={profileName}/>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default ProfileScreen;
