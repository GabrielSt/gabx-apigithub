import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import UserProfile from "./components/userProfile";
import ReposList from "./components/reposList";
import RepoDetail from "./components/repoDetail";
import Header from "./components/header";
import Error from "./components/error";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/userProfile/:userName" component={UserProfile} />
            <Route path="/reposList/:userName" component={ReposList} />
            <Route
              path="/repoDetail/:userName/:repoName"
              component={RepoDetail}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
