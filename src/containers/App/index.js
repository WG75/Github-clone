// @flow

import React from 'react';
import LoginPanel from '../../components/LoginPanel';
import './App.css';

class App extends React.Component {
  state = {
    selectedAuthType: 'token',
  };

  onChange(type: string) {
    this.setState({
      selectedAuthType: type,
    });
  }

  render() {
    return (
      <LoginPanel
        title="Githun Insights"
        hint="Please login to get insights for your github account."
        logo="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg"
        error={false}
        loading={false}
        onSubmit={console.log}
      />
    );
  }
}

export default App;
