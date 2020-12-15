import React from 'react';

import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Newsletter from './pages/Newsletter';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/newsletter" component={Newsletter} />
            <Route component={PageNotFound} />
        </Switch>
    );
}

export default Routes;