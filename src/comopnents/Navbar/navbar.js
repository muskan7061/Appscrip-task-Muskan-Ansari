import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-img">
          <img src="./images/logo.png" alt="Logo-img" />
        </div>
        <div className="navbar-logo">
          <h1>LOGO</h1>
        </div>
        <div className="navbar-section">
          <img src="./images/searchlogo.png" alt="" />
          <img src="./images/like.png" alt="" />
          <img src="./images/shopping.png" alt="" />
          <img src="./images/profile.png" alt="" />
          <select name="" id="nav-lang">
            <option value="">ENG</option>
            <option value="">हिन्दी</option>
          </select>
        </div>
      </nav>
     <nav >
    <ul className='navbar-second' >
      <li>SHOP</li>
      <li>SKILLS</li>
      <li>STORIES</li>
      <li>ABOUT</li>
      <li>CONTACT US</li>
    </ul>
    </nav>
    </div>
  );
}

export default Navbar
