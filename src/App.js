// App.js
import React from 'react';
import './App.css';
// import NavigationBar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
import Calendar from './Components/Calendar'
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import EmployeeDashboard from './Components/EmployeeDashboard';
import Invitation from './Components/Invitation';

const App = () => {
  return (
    <div className="app">
    <Sidebar/>
    <Navbar/>
    <Calendar/>
    <Invitation/>
    <EmployeeDashboard/>
    <div className="main-content">
      {/* Your main content goes here */}
    </div>
  </div>
  );
};

export default App;
