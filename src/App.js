import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(true);

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route name="login" exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route name="profile" exact path="/">
            {!user ? (
              <Redirect from="/" to="login" />
            ) : (
              <Profile />
            )}
          </Route>
          <Route name="update" exact path="/profile/update">
            <h1>Hello</h1>
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
