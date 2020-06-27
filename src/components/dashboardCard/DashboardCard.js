import React from 'react'

function DashboardCard({ title, data, icon, color}) {
    return (
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h3 className="my-0 font-weight-normal">{title}</h3>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{data}</h1>
                    <span style={{ fontSize: "32px", color: {color} }}>
                        <i className={icon} aria-hidden="true"></i>
                    </span>
                </div>
            </div>
    );
}

export default DashboardCard;
