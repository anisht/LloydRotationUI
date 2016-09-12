import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from '../containers/Main';
import Home from '../components/Home';

const routes = (
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </MuiThemeProvider>
);

export default routes;