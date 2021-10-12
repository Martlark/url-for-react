import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {routeAbout} from "./About";
import Home from "./Home";
import {routeNumber} from "./Number";
import Word from "./Word";

export default function App() {
    return <Router>
        <div>
            <nav>
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
                    <li>
                        <Link to="/word/hello">Word hello</Link>
                    </li>
                </ul>
            </nav>
            <hr/>

            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/word/:word" component={Word}>
                </Route>
                {routeAbout.Route()}
                {routeNumber.Route()}
            </Switch>
        </div>
    </Router>
}
