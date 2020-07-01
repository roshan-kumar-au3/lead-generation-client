import React from 'react'
import Base from '../core/Base';
import Logo from '../images/undraw_hey_email_liaa.svg';

function Funnel() {
    return (
        <Base>
            <div className="d-flex align-items-center p-3 my-3 text-dark-50 bg-light rounded shadow-sm">
                <img className="mr-3" src={Logo} alt="" width="48" />
                <div className="lh-100">
                <h5 className="mb-0 text-dark lh-100">Leads in Funnel</h5>
                <small>Since 2020</small>
                </div>
            </div>
        </Base>
    )
}

export default Funnel;
