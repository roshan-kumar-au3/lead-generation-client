import React, { useState, useEffect } from 'react'
import Base from '../core/Base';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getAllLeads } from './helper/leadapicall';
import './AllLead.css';
import Header from '../components/Header/Header';

function AllLead() {
    const [leads, setLeads] = useState([]);
    const allLeads = () => {
        getAllLeads()
            .then(response => {
                console.log(response);
                setLeads(response.data.reverse());
            })
            .catch(err => {
                console.log(err)
            });
    }
    useEffect(() => {
        allLeads();
    }, [])
    return (
        <Base>
            {/* <h1 classNameName="border-bottom text-center">All Leads</h1> */}
            <Header title="All Leads" />
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                {
                    leads.map((lead, index) => {
                        return (
                            <Link to={`lead/${lead._id}`} key={lead._id} style={{ textDecoration: "none" }}>
                                <div className={`media p-3 rounded mb-1 ${lead.contacted ? "bg-success text-white" : "text-muted"}`}>
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32" fill={index % 2 ? "#6f42c1" : "#e83e8c"}><title>Placeholder</title><rect width="100%" height="100%"/></svg>
                                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong className="d-block text-gray-dark">@{lead.name}</strong>
                                    {lead.description}
                                    <strong className="d-block text-primary">{lead.company}</strong>
                                    <strong className="d-block text-gray-dark">by {lead.businessDev}{" "} 
                                        - <Moment fromNow>{lead.createdAt}</Moment>
                                    </strong>
                                </p>
                                </div>
                            </Link>
                        );
                    })
                }
                {/* <small className="d-block text-right mt-3">
                <Link to="#">All updates</Link>
                </small> */}
            </div>
        </Base>
    );
}

export default AllLead;
