import React, {useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Switch, useLocation} from "react-router-dom";
import About, {routeAbout} from "./About";
import Home from "./Home";
import Number, {routeNumber} from "./Number";

export default function App() {
    return <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {routeAbout.LinkTo()}
                </li>
                <li>
                    {routeNumber.LinkTo(66, 'Number 66')}
                </li>
                <li>
                    <Link to="/number/4567">Number 4567</Link>
                </li>
            </ul>

            <hr/>

            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                {routeAbout.Route()}
                {routeNumber.Route()}
            </Switch>
        </div>
    </Router>
}
