import React from "react";
//import logo from "../src/assets/logo.svg";
import "./Dashboard.css";
import Terminal from "./terminal/Terminal";
import Buyers from "./buyers/Buyers";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";




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
