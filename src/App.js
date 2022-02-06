import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Main from './components/MainComponent';
import People from './components/People';
//import Download from './components/TestExcel';

const App = () => {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() => (
                <People />
            )} exact={true} />
        </Switch>
  </BrowserRouter>

  );
};

export default App;
