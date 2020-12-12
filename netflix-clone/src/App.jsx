import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BROWSE} component={Browse} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    </Router>
  );
}
