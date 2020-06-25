import React from 'react';
import Base from '../core/Base';

function CreateLead() {
    return (
        <Base>
            <h1 className="border-bottom text-center">Create New Lead</h1>
            <form style={{ width: "50%" }} className="mb-5 offset-3">
                <div class="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Enter Full Name" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="example@gmail.com" />
                </div>
                <div class="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" class="form-control" id="company" aria-describedby="company" placeholder="Enter company name" />
                </div>
                <div class="form-group">
                    <label htmlFor="role">Role</label>
                    <input type="text" class="form-control" id="role" aria-describedby="roleInCompany" placeholder="Enter role" />
                </div>
                <div class="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" class="form-control" id="country" aria-describedby="country" placeholder="country" />
                </div>
                <div class="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" class="form-control" id="state" aria-describedby="state" placeholder="Enter state" />
                </div>
                <div class="form-group">
                    <label htmlFor="business">Business Executive</label>
                    <input type="text" class="form-control" id="business" aria-describedby="state" placeholder="Enter your name" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Base>
    )
}

export default CreateLead;
