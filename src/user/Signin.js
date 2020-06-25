import React, { useState } from 'react'
import Base from '../core/Base';
//import { isAuthenticated, signin, authenticate } from '../auth/helper';
import { Redirect } from 'react-router-dom';
import Logo from '../images/logo.jpeg';
import './Signin.css'

const Signin = () => {

    const [values, setValues] = useState({
        email: "a@roshan.com",
        password: "12345",
        error: "",
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values


    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const loadingMessage = () => {
        return(
            loading && (<div className="row">
                            <div className="col-md-6 offset-sm-3 text-left">
                                <div className="alert alert-info"
                                    style={{ display: loading ? "" : "none" }}>
                                    Loading ...
                                </div>
                            </div>
                        </div>
            )    
        )
    };

    const errorMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>        
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const signInForm = () => {
        return (
            <div className="form-body">
                <form class="form-signin">
                    <div class="text-center mb-4">
                        <img class="mb-4" src={Logo} alt="" width="72" height="72" />
                    </div>

                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
                </form>
            </div>
        )
    }

    return (
        <div>
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
        </div>
    )
}

export default Signin;