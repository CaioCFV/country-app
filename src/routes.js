import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home';

import CountryPage from './Pages/CountryPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route path="/country/:name" component={CountryPage}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;

