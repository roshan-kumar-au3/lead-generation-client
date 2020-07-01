import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import App from './App';
import CreateLead from './user/CreateLead';
import PrivateRoute from './auth/helper/PrivateRoute';
import setAuthToken from './auth/helper/setToken';
import AllLead from './user/AllLead';
import LeadDetails from './user/LeadDetails';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from './auth/helper';
import Funnel from './user/Funnel';
import UpdateLead from './user/UpdateLead';

const Routes = () => {
    const dispatch = useDispatch();
    const setToken = () => {
        if (localStorage.getItem("jwt")) {
            let jwt = JSON.parse(localStorage.getItem("jwt"));
            console.log("jwt", jwt);
            setAuthToken(jwt.token);
            dispatch({
                type: "SET_CURRENT_USER",
                payload: isAuthenticated().user
              });
            dispatch({
            type: "GET_USER_INFO",
            payload: isAuthenticated().user
            })
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
                    <PrivateRoute path="/lead/:leadId" exact component={LeadDetails} />
                    <PrivateRoute path="/update/lead/:leadId" exact component={UpdateLead} />
                    <PrivateRoute path="/funnel" exact component={Funnel} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;