import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import history from "./History";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <ProjectList />} />
                    <Route path="/resume" render={() => <Resume />} />
                    {/* <Route exact path="/">
                        <ProjectList />
                    </Route>
                    <Route exact path="/resume">
                        <Resume />
                    </Route> */}
                </Switch>
            </Router>
        );
    }
}