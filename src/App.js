import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route name="login" exact path="/login">
            <Login />
          </Route>
          <Route name="profile" exact path="/">
            {!user ? (
              <Redirect from="/" to="login" />
            ) : (
              <h1>Hello</h1>
            )}
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
