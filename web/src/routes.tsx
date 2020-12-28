import React, { Component } from 'react';

import { BrowserRouter, Switch, Route , RouteProps, Redirect} from 'react-router-dom';

import Landing from './pages/Landing';
import Reserve from './pages/ScheduleTable';
import Logoff from './auth/logoff';

interface CustomRouteProps extends RouteProps {
    isPrivate?: boolean,
    component: React.ComponentType;
}

function CustomRoute ({isPrivate = false, ...rest}: CustomRouteProps) {
    const auth = localStorage.getItem('auth');
    console.debug('auth', localStorage)
    if ( isPrivate && !auth ) {
        return <Redirect to='/' />
    }

    return <Route {...rest}/>

}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute path='/' exact component={Landing} /> 
                <CustomRoute path='/reserve' isPrivate component={Reserve} /> 
                <CustomRoute path='/logoff' component={Logoff} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;