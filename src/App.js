import React, { useState } from "react";
import logo from "./logo.svg";
import "./Login.css";
import "./Dashboard.css";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  Redirect,

} from "react-router-dom";
import "./App.css";

/* Home component */
const handleLogin = () => {



};

const Login = () => (
  <form className="login-form">
    <label for="fusername">Github username:</label>
    <input className="input" type="text" id="fusername" name="fusername" />

    <label for="fpassword">Password</label>
    <input className="input" type="text" id="fpassword" name="fpassword" />
    <small id="emailHelp" className="form-text text-muted">The password should contain a number,.</small>

    <button className="form__button" type="button" onClick={handleLogin()}>
      Login
    </button>
  </form>
);

const Dashboard = ({ match }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="dashboard" style={{ display: "flex" }}>
      <div
        className="dashboard__box"
        style={{
          padding: "10px",
          width: "40%",
          background: "#aaa"
        }}
      >
        <img className="dashboard__avatar" src={logo} alt="avatar" />
        <ul
          className="dashboard__list"
          style={{ listStyleType: "none", padding: 0 }}
        >
          <li className="dashboard__list_item">
            <Link to={`${url}/terminal`}>Terminal</Link>
          </li>
          <li className="dashboard__list_item">
            <Link to={`${url}/buyers`}>Buyers</Link>
          </li>
        </ul>

        <footer> Copyright 2020 </footer>
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        <div>
          <Switch>
            <Route path={`${path}/terminal`}>
              <Terminal />
            </Route>
            <Route path={`${path}/buyers`}>
              <Buyers />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const Terminal = () => (
  <div>
    <h2>Terminal</h2>
  </div>
);

const Buyers = ({ match }) => {
  return (
    <div>
      Buyers
      {/*<ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
        />*/}
    </div>
  );
};

let isAuthenticated = false;

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

const [state, setState] = useState({
  email: "",
  password: ""
})

const handleChange = (e) => {
  const { id, value } = e.target
  setState(prevState => ({
    ...prevState,
    [id]: value
  }))
}

function App() {
  return (
    <Route>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" /> <br />

        <Switch>

          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
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
/*
const Login = () => (
  <form>
    <label for="fusername">Github username:</label>
    <input type="text" id="fusername" name="fusername" />
    <br />
    <label for="fpassword">Password</label>
    <input type="text" id="fpassword" name="fpassword" />
    <br />
    <button type="button">Login</button>
  </form>
);

const routes = [
  {
    path: "/terminal",
    main: () => <h2>Terminal</h2>
  },
  {
    path: "/buyers",
    main: () => <h2>Buyers</h2>
  }
];
const isAuthenticated = true;

export const App = () => {
  return (
    <div>
      <Router>
        <Login />
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}
          >
            <img src={logo} alt="logo" />
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/terminal">Terminal</Link>
              </li>
              <li>
                <Link to="/buyers">Buyers</Link>
              </li>
            </ul>

            <footer> Copyright 2020 </footer>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>

                <Route

                  path="/terminal"
                  exact="true"
                  component= Terminal

                />

            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};*/
