import React, { useState, useEffect } from 'react'
import Base from '../core/Base';
import Header from '../components/Header/Header';
import { getLeadDetails } from './helper/leadapicall';
import { isAuthenticated } from '../auth/helper';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';

function LeadDetails(props) {
    const [leadDetails, setLeadDetails] = useState({});
    const history = useHistory();
    console.log(props.match.params.leadId);
    const leadId = props.match.params.leadId;
    const userId = isAuthenticated().user._id;
    const goToUpdate = () => {
        history.push(`/update/lead/${leadId}`)
    }
    const getLeadInfo = () => {
        getLeadDetails(leadId, userId)
            .then(response => {
                console.log(response);
                setLeadDetails(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    };
    useEffect(() => {
        getLeadInfo();
    }, []);
    return (
        <Base>
            <Header title="Lead Details" />
            <div className={`media p-3 rounded mb-1 text-muted"}`} style={{ fontSize: "1.2rem"}}>
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32" fill="#6f42c1"><title>Placeholder</title><rect width="100%" height="100%"/></svg>
                                <p className="media-body pb-3 mb-3 small lh-125 border-bottom border-gray">
                                    <strong className="d-block text-gray-dark mb-2">@{leadDetails.name}</strong>
                                    <strong className="d-block text-muted mb-2">{leadDetails.description}</strong>
                                    <strong className="d-block text-muted mb-2">{leadDetails.company}</strong>
                                    <strong className="d-block text-muted mb-2">{leadDetails.email}</strong>
                                    <strong className="d-block text-muted mb-2">{leadDetails.country}</strong>
                                    <strong className="d-block text-muted mb-2">{leadDetails.city}</strong>
                                    <strong className="d-block text-muted mb-2">Contacted - {leadDetails.contacted ? "yes" : "no"}</strong>
                                    <strong className="d-block text-gray-dark mb-2">by {leadDetails.businessDev}{" "} 
                                        - <Moment fromNow>{leadDetails.createdAt}</Moment>
                                    </strong>
                                </p>
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn-outline-danger ml-2 mr-1">Delete</button>
            <button type="button" className="btn btn-outline-info mr-1" onClick={goToUpdate}>Update</button>
            <button type="button" className="btn btn-outline-success">Move to funnel</button>
            </div>
        </Base>
    )
}

export default LeadDetails;
