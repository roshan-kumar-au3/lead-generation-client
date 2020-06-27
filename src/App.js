import React, { useEffect } from 'react';
import './App.css';
import Base from './core/Base';
import setAuthToken from './auth/helper/setToken';

function App() {
  const setToken = () => {
    if (localStorage.getItem("jwt")) {
      let jwt = JSON.parse(localStorage.getItem("jwt"));
      console.log("jwt", jwt);
      setAuthToken(jwt.token);
    }
  }
  useEffect(() => {
    setToken();
  }, [])
  return (
    <Base>
        <h1 className="border-bottom">Dashboard</h1>
    </Base>
  );
}

export default App;
