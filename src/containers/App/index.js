// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from '../LoginScreen';
import HomePage from '../HomePage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/profile" render={() => <h1>profile</h1>} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
