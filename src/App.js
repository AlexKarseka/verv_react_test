import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Banner from "./components/Banner/Banner";

const App = () => {
  return (
      <Router>
          <Switch>
              <Route path="/">
                  <Banner />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
