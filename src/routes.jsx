import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'containers/Home';

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="*">
        <Home />
      </Route>
      <Route exact path="/example">
        <Home />
      </Route>
    </Switch>
  );
}

export default MainRoutes;
