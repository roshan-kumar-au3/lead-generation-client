import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import App from './App';
import CreateLead from './user/CreateLead';
import PrivateRoute from './auth/helper/PrivateRoute';
import setAuthToken from './auth/helper/setToken';
import AllLead from './user/AllLead';

const Routes = () => {
    const setToken = () => {
        if (localStorage.getItem("jwt")) {
            let jwt = JSON.parse(localStorage.getItem("jwt"));
            console.log("jwt", jwt);
            setAuthToken(jwt.token);
        }
    }
    useEffect(() => {
        setToken();
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/" exact component={App} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/signin" exact component={Signin} />
                    <PrivateRoute path="/createlead" exact component={CreateLead} />
                    <PrivateRoute path="/allleads" exact component={AllLead} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;