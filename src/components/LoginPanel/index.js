// @flow

import React from 'react';
import AuthTypeTapper from '../AuthTypeTapper';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './LoginPanel.css';

type formData = {
  authType: string,
  username?: string,
  password?: string,
  token?: string,
};

type Props = {
  logo: string,
  title: string,
  hint: string,
  error: boolean,
  errorMessage: string,
  loading: boolean,
  failedLogin: boolean,
  failedLoginMessage: string,

  onSubmit: (data: formData) => void,
};

type State = {
  selectedAuthType: string,
  isAdmin: boolean,
};

export default class LoginPanel extends React.Component<Props, State> {
  state = {
    selectedAuthType: 'username_&_password',
    isAdmin: false,
  };

  onAuthTypeChange(type: string) {
    this.setState({
      selectedAuthType: type,
    });
  }

  toggleAdminState() {
    const { isAdmin: previousState } = this.state;
    this.setState({
      isAdmin: !previousState,
    });
  }

  render() {
    const {
      logo,
      title,
      hint,
      error,
      loading,
      onSubmit,
      failedLoginMessage,
      failedLogin,
      errorMessage,
    } = this.props;

    const { selectedAuthType, isAdmin } = this.state;
    return (
      <section className="login-panel">
        <header className="login_panel__header-container">
          <div className="login-panel__header-content">
            <img className="login-panel__header-logo" src={logo} alt="github logo" />
            <h2 className="login-panel__header-title">{title}</h2>
            <span className="login-panel__header-title">{hint}</span>
          </div>
          {error && (
            <p className="login-panel__feedback login-panel__feedback--is_danger">
              something went wrong, please try again.
            </p>
          )}
          {failedLogin && (
            <div className="login-panel__feedback login-panel__feedback--is_danger">
              username or password is invalid. please try again.
            </div>
          )}
        </header>

        <form onSubmit={onSubmit} className="login-panel__form">
          <AuthTypeTapper
            className="login-panel__auth-type"
            selectedType={selectedAuthType}
            authTypes={['Personal Access token', 'username_&_password']}
            onChange={(type) => {
              this.onAuthTypeChange(type);
            }}
          />
          {selectedAuthType === 'username_&_password' ? (
            <div className="login_panel__fields_wrapper">
              <Input
                className="login-panel__input"
                name="username"
                id="username"
                label="Username"
              />
              <Input
                className="login-panel__input"
                type="password"
                name="password"
                id="password"
                label="Password"
              />
            </div>
          ) : (
            <Input className="login-panel__input" name="token" id="token" label="Access Token" />
          )}

          <Checkbox
            className="login-panel__checkbox"
            label="Login as admin"
            id="admin"
            name="admin"
            checked={isAdmin}
            onChange={() => {
              this.toggleAdminState();
            }}
          />

          <Button className="login-panel__button" isPrimary type="submit">
            Sign in
          </Button>

          {loading && <div className="login-panel__spinner"></div>}
        </form>
      </section>
    );
  }
}
