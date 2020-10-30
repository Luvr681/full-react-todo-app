import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar, Alert } from './components';
import { Home, About } from './pages';
import { AlertState } from './context/alert';
import { FirebaseState } from './context/firebase';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />

          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/about"} component={About}/>
            </Switch>
          </div>

        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
