import React from "react";
//import logo from "../src/assets/logo.svg";
import "./Dashboard.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

/* Home component */
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
                <img className="dashboard__avatar" alt="avatar" />
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

export default Dashboard;
