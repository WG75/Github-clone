// @flow

import React from 'react';
import AuthTypeTapper from '../AuthTypeTapper';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';

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
  loading: boolean,
  invalidCredintials: boolean,
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
      logo, title, hint, error, loading, onSubmit, invalidCredintials,
    } = this.props;

    const { selectedAuthType, isAdmin } = this.state;
    return (
      <section>
        <header>
          <div className="content">
            <img src={logo} alt="github logo" />
            <h2 className="title">{title}</h2>
            <span>{hint}</span>
          </div>
          {error && <div>something went wrong, please try again.</div>}
          {invalidCredintials && <div>username or password is invalid. please try again.</div>}
          <form onSubmit={onSubmit}>
            <AuthTypeTapper
              selectedType={selectedAuthType}
              authTypes={['token', 'username_&_password']}
              onChange={(type) => {
                this.onAuthTypeChange(type);
              }}
            />
            {selectedAuthType === 'username_&_password' ? (
              <div>
                <Input name="username" id="username" label="Username" />
                <Input type="password" name="password" id="password" label="Password" />
              </div>
            ) : (
              <Input name="token" id="token" label="Personal Access Token" />
            )}

            <Checkbox
              label="Login as admin"
              id="admin"
              name="admin"
              checked={isAdmin}
              onChange={() => {
                this.toggleAdminState();
              }}
            />

            <Button isPrimary type="submit">
              Sign in
            </Button>

            {loading && 'loading.....'}
          </form>
          ;
        </header>
      </section>
    );
  }
}
