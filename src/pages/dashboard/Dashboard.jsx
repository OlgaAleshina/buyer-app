import React from "react";
//import logo from "../src/assets/logo.svg";
import "./Dashboard.css";
import Terminal from "./terminal/Terminal";
import Buyers from "./buyers/Buyers";
import { Link, Route, Switch, useRouteMatch, useLocation } from "react-router-dom";



const Dashboard = ({ }) => {

    let { path, url } = useRouteMatch();
    let location = useLocation();
    console.log(location);
    //src={location.state.avatarUrl}
    return (
        <div className="dashboard" >
            <div className="dashboard__left">
                <img className="dashboard__avatar" alt="avatar" />
                <ul className="dashboard__list"               >
                    <li className="dashboard__list_item">
                        <Link className="dashboard__list_link" to={`${url}/terminal`}>Terminal</Link>
                    </li>
                    <li className="dashboard__list_item">
                        <Link className="dashboard__list_link" to={`${url}/buyers`}>Buyers</Link>
                    </li>
                </ul>
                <footer className="dashboard__footer"> Copyright @2020 </footer>
            </div>


            <div className="dashboard__right">
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

    );
};

export default Dashboard;
