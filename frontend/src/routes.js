import React from 'react';
import { BrowserRouter, BrowserRouter as router , Route, Switch } from 'react-router-dom';


import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />

            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new" component={NewIncident} />
        </Switch>
    </BrowserRouter>
    );
}