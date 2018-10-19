// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from '../LoginScreen';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <h1>yay</h1>} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
