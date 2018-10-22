// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Search from '../../containers/Search';
import './Nav.css';

type Props = {
  avatar: string,
  username: string,
  admin: boolean,
  withResults: boolean,
};

type State = {
  searchIsFocused: boolean,
};

class Nav extends React.Component<Props, State> {
  state = {
    searchIsFocused: false,
  };

  handleOnFocus() {
    this.setState({
      searchIsFocused: true,
    });
  }

  handleOnBlur() {
    this.setState({
      searchIsFocused: false,
    });
  }

  render() {
    const { searchIsFocused } = this.state;
    const {
      avatar, username, admin, withResults,
    } = this.props;

    return (
      <nav className="nav">
        <div className="nav__logo-container">
          <img
            className="nav__logo-image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg"
            alt="github logo"
          />
          <h1 className="nav__logo-text">Github Insights</h1>
        </div>

        <div
          className={`nav__search ${
            searchIsFocused || withResults ? 'nav__search--is-focused' : ''
          }`}
        >
          <Search
            searchIsFocused={searchIsFocused}
            withResults={withResults}
            onFocus={this.handleOnFocus.bind(this)}
            onBlur={this.handleOnBlur.bind(this)}
          />
          {' '}
        </div>

        <div className="nav__right">
          <div className="nav__user-container">
            <img className="nav__user-avatar" src={avatar} alt="user profile picture" />
            <span className="nav__username">{username}</span>
          </div>

          <Button isPrimary={false} inverted className="nav__button">
            Logout
          </Button>
          {admin && (
            <Button isLink to="/admin" className="nav__button">
              Admin panel
            </Button>
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
