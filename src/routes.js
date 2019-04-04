import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home';
import UserProfile from './components/userProfile';
import ReposList from './components/reposList';
import RepoDetail from './components/repoDetail';
import Header from './components/header';
import Error from './components/error'


export default props => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/reposList" component={ReposList} />
                <Route path="/repoDetail" component={RepoDetail} />
                <Route component={Error} />
            </Switch>
        </div>
    </BrowserRouter>
)