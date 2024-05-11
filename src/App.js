import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Commissions from './Commissions';


function Profile() {
  return <h2>Profile</h2>;
}

function TOS() {
  return <h2>TOS</h2>;
}

function App() {
  return (
    <Router>
      <div className="background">
        <div className="button-container">
          <Link to="/commissions"><button className="button1">Commissions</button></Link>
          <Link to="/profile"><button className="button1">Profile</button></Link>
          <Link to="/tos"><button className="button1">TOS</button></Link>
        </div>
        <div className="container">
          <Routes>
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tos" element={<TOS />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;