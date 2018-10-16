// @flow

import React from 'react';
import AuthTypeTapper from '../../components/AuthTypeTapper';
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
      <AuthTypeTapper
        selectedType={this.state.selectedAuthType}
        authTypes={['token', 'username_&_password']}
        onChange={(type) => {
          this.onChange(type);
        }}
      />
    );
  }
}

export default App;
