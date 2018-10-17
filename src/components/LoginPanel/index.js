// @flow

import React from 'react';
import AuthTypeTapper from '../AuthTypeTapper';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './LoginPanel.css';

export type formData = {
  authType: string,
  username?: string,
  password?: string,
  token?: string,
  admin: boolean,
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
  authTypeUsed?: string,
  onSubmit: (data: formData) => void,
};

type State = {
  selectedAuthType: string,
  isAdmin: boolean,
  username: string,
  password: string,
  token: string,
};

export default class LoginPanel extends React.Component<Props, State> {
  state = {
    selectedAuthType: 'basic',
    isAdmin: false,
    username: '',
    password: '',
    token: '',
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

  handleInputChange(fieldName: string, newValue: string) {
    this.setState({
      [fieldName]: newValue,
    });
  }

  canSubmitForm(data: { username: string, password: string, token: string }): boolean {
    const { username, password, token } = data;
    const { loading } = this.props;
    if (((username && password) || token) && !loading) {
      return true;
    }

    return false;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const {
      username, password, token, isAdmin: admin, selectedAuthType: authType,
    } = this.state;

    if (onSubmit) {
      onSubmit({
        username,
        password,
        token,
        admin,
        authType,
      });
    }
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
      authTypeUsed,
    } = this.props;

    const {
      selectedAuthType, isAdmin, username, password, token,
    } = this.state;

    const canSubmit = this.canSubmitForm({ username, password, token });
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
              {authTypeUsed === 'basic'
                ? 'username or password is invalid. please try again.'
                : 'Token is invalid or expired, please try again with another token.'}
            </div>
          )}
        </header>

        <form onSubmit={this.handleSubmit.bind(this)} className="login-panel__form">
          <AuthTypeTapper
            className="login-panel__auth-type"
            selectedType={selectedAuthType}
            authTypes={['basic', 'token']}
            onChange={(type) => {
              this.onAuthTypeChange(type);
            }}
          />
          {selectedAuthType === 'basic' ? (
            <div className="login_panel__fields_wrapper">
              <Input
                className="login-panel__input"
                name="username"
                id="username"
                label="Username"
                value={username}
                onChange={this.handleInputChange.bind(this)}
              />
              <Input
                className="login-panel__input"
                type="password"
                name="password"
                id="password"
                label="Password"
                value={password}
                onChange={this.handleInputChange.bind(this)}
              />
            </div>
          ) : (
            <Input
              className="login-panel__input"
              name="token"
              id="token"
              label="Access Token"
              value={token}
              onChange={this.handleInputChange.bind(this)}
            />
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

          <Button
            disabled={!canSubmit}
            className={"login-panel__button"}
            isPrimary
            type="submit"
          >
            Sign in
          </Button>

          {loading && <div className="login-panel__spinner" />}
        </form>
      </section>
    );
  }
}
