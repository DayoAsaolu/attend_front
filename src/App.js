import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/MainComponent';
import Download from './components/TestExcel';

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() => (
                <Main />
            )} exact={true} />
            <Route path="/welcome" render={() => (
                <Download />
            )} />
        </Switch>
  </BrowserRouter>

  );
};

export default App;
