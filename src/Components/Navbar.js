import React from 'react'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Igniculuss</span>
      </div>
      <div className="dropdown-menu">
        <button className="dropbtn">Igniculuss</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="datetime-dropdown">
        <input type="datetime-local" />
      </div>
    </div>
  )
}

export default Navbar
