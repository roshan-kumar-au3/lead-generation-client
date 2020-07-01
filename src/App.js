import React, { useEffect, useState } from 'react';
import './App.css';
import Base from './core/Base';
import setAuthToken from './auth/helper/setToken';
import DashboardCard from './components/dashboardCard/DashboardCard';
import { getAllLeads } from './user/helper/leadapicall';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header.js';

function App() {
  const [leads, setLeads] = useState([]);
  const dispatch = useDispatch();
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
        dispatch({
          type: "GET_LEADS",
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err)
      });
  }
  useEffect(() => {
    setToken();
  }, []);
  return (
    <Base>
        {/* <h1 className="text-center">Dashboard</h1> */}
        {/* <div className="d-flex align-items-center p-3 my-3 text-dark-50 bg-light rounded shadow-sm">
                <img className="mr-3" src={Logo} alt="" width="48" />
                <div className="lh-100">
                <h5 className="mb-0 text-dark lh-100">Dashboard</h5>
                <small>Since 2020</small>
                </div>
        </div> */}
        <Header title="Dashboard" />
        <div className="card-deck card p-3 text-center mb-5">
          <div className="col-lg-4">
            <DashboardCard title="Total leads" data={leads.length} icon={`fa fa-bar-chart`} />
          </div>
          <div className="col-lg-4">
            <DashboardCard title="Leads shared" data={6} icon={`fa fa-calendar-check-o`} />
          </div>
          <div className="col-lg-4">
            <DashboardCard title="Leads in funnel" data={6} icon={`fa fa-pie-chart`}  />
          </div>
          <div className="col-lg-6">
            <DashboardCard title="Followups for today" data={9} icon={`fa fa-pencil-square-o`}  />
          </div>
          <div className="col-lg-6">
            <DashboardCard title="Leads to be contacted today" data={3} icon={`fa fa-hourglass-start`}  />
          </div>
        </div>
    </Base>
  );
}

export default App;
