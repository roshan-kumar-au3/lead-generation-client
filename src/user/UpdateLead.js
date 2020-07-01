import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth/helper';
import { createLead, getLeadDetails } from './helper/leadapicall';
import Header from '../components/Header/Header';
import Base from '../core/Base';

function UpdateLead(props) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        company: "",
        roleInOrganisation: "",
        description: "",
        country: "",
        businessDev: "",
        contacted: "",
        city: "",
        error: "",
        success: false
    });

    const { user } = isAuthenticated();
    const leadId = props.match.params.leadId;
    const userId = isAuthenticated().user._id;

    const {
        name,
        email,
        company,
        roleInOrganisation,
        description,
        country,
        businessDev,
        contacted,
        city,
        error,
        success
    } = values;

    const getLeadInfo = () => {
        getLeadDetails(leadId, userId)
            .then(response => {
                console.log(response);
                setValues({
                    ...values,
                    ...response.data
                });
            })
            .catch(err => {
                console.log(err)
            });
    }
    useEffect(() => {
        getLeadInfo();
    }, [])

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        console.log(values);
        let userId = user._id;
        if (!name || !email || !country || !company 
            || !description || !city || !roleInOrganisation
            || !businessDev) {
            setValues({
                ...values,
                error: "All fields are mandatory"
            })
        } else {
            setValues({
                ...values,
                error: false
            })
            createLead({
                    name,
                    email,
                    company,
                    roleInOrganisation,
                    description,
                    country,
                    businessDev,
                    city
                }, userId)
                .then(response => {
                    console.log(response);
                    if (response.data.error) {
                        setValues({
                            ...values,
                            error: response.data.error,
                            success: false
                        })
                    } else {
                        setValues({
                            ...values,
                            name: "",
                            email: "",
                            company: "",
                            roleInOrganisation: "",
                            description: "",
                            country: "",
                            businessDev: "",
                            city: "",
                            error: "",
                            success: true
                        });
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const successMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left mt-3">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}>
                        New Lead was created successfully.
                    </div>
                </div>
            </div>    
        )
    };

    const errorMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left mt-1">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>        
        )
    };
    return (
        <Base>
        <Header title="Update Lead" />
        {successMessage()}
        {errorMessage()}
        <form style={{ width: "100%" }} className="card mb-5 shadow-sm">
            <div className="row p-3">
                <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" 
                            onChange={handleChange("name")} value={name}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange("email")}
                            placeholder="example@gmail.com" value={email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" className="form-control" id="company" aria-describedby="company" placeholder="Enter company name" onChange={handleChange("company")} value={company} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="description">Project Description</label>
                            <textarea type="text" rows="4" className="form-control" id="description"
                            onChange={handleChange("description")} aria-describedby="roleInCompany" placeholder="Enter project description ..." value={description} />
                        </div>
                </div>
                <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <input type="text" className="form-control" value={roleInOrganisation}
                            aria-describedby="role" placeholder="Enter role" onChange={handleChange("roleInOrganisation")}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" id="country" aria-describedby="country" placeholder="Country" onChange={handleChange("country")} value={country} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" aria-describedby="city" placeholder="Enter city" onChange={handleChange("city")} value={city} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contacted">Contacted</label>
                            <input type="text" className="form-control" id="business" aria-describedby="state" placeholder="Enter your name" onChange={handleChange("contacted")} value={contacted ? "yes" : "no"} />
                        </div>
                        <button type="button" onClick={onSubmit} className="btn btn-outline-success float-right">Submit</button>
                </div>
            </div>
        </form>
    </Base>
    )
}

export default UpdateLead;
