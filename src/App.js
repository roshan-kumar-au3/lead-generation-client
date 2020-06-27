import React, { useEffect, useState } from 'react';
import './App.css';
import Base from './core/Base';
import setAuthToken from './auth/helper/setToken';
import DashboardCard from './components/dashboardCard/DashboardCard';
import { getAllLeads } from './user/helper/leadapicall';

function App() {
  const [leads, setLeads] = useState([]);
  const setToken = () => {
    if (localStorage.getItem("jwt")) {
      let jwt = JSON.parse(localStorage.getItem("jwt"));
      console.log("jwt", jwt);
      setAuthToken(jwt.token);
    }
    getAllLeads()
      .then(response => {
        console.log(response);
        setLeads(response.data);
      })
      .catch(err => {
        console.log(err)
      });
  }
  useEffect(() => {
    setToken();
  }, [])
  return (
    <Base>
        <h1 className="border-bottom text-center">Dashboard</h1>
        <div className="card-deck mb-3 text-center">
          <div className="col-lg-6">
            <DashboardCard title="Total leads" data={leads.length} icon={`fa fa-bar-chart`} />
          </div>
          <div className="col-lg-6">
            <DashboardCard title="Leads to be contacted today" data={3} icon={`fa fa-hourglass-start`}  />
          </div>
          <div className="col-lg-6">
            <DashboardCard title="Leads shared" data={6} icon={`fa fa-calendar-check-o`} />
          </div>
          <div className="col-lg-6">
            <DashboardCard title="Followups for today" data={9} icon={`fa fa-pencil-square-o`}  />
          </div>
        </div>
    </Base>
  );
}

export default App;
