import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import App from './App';
import CreateLead from './user/CreateLead';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/createlead" exact component={CreateLead} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;