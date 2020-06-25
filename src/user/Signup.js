import React, { useState } from 'react'
// import { signup } from '../auth/helper';
import { Link } from 'react-router-dom';
import './Signin.css';
import Logo from '../images/logo.jpeg'

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const {name, email, password, error, success} = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false})
        // signup({name, email, password})
        // .then(data => {
        //     if (data.error) {
        //         setValues({ ...values, error: data.error, success: false })
        //     } else {
        //         setValues({
        //             ...values,
        //             name: "",
        //             email: "",
        //             password: "",
        //             error: "",
        //             success: true
        //         })
        //     }
        // })
        // .catch(err => console.log(err));
    }

    const signUpForm = () => {
        return (
            <div className="form-body">
                <form class="form-signin">
                    <div class="text-center mb-4">
                        <img class="mb-4" src={Logo} alt="" width="72" height="72" />
                    </div>
                    <div class="form-label-group">
                        <input type="text" id="inputEmail" class="form-control" placeholder="Enter Name" required autofocus />
                        <label for="inputEmail">Name</label>
                    </div>

                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="button" onClick={onSubmit} >Submit</button>
                    <p class="mt-5 mb-3 text-muted text-center">&copy;2020</p>
                </form>
            </div>
        )
    };

    const successMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}>
                        New Account was created successfully. Please <Link to="/signin">Login Here</Link>
                    </div>
                </div>
            </div>    
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

    return (
        <div>
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </div>
    )
}

export default Signup;