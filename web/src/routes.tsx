import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Reserve from './pages/ScheduleTable'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} /> 
                <Route path='/reserve' component={Reserve} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;