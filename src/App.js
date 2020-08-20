import React from "react";
import logo from "./logo.svg";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";


let isAuthenticated = true;

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};



function App() {
  return (
    <Route>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" /> <br />

        <Switch>

          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

        </Switch>
      </div>
    </Route>
  );
}

export default App;
