import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/Nav.css";
import logo from './styles/Screenshot 2024-09-09 200848.png'; // Import your logo image

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navbar">
      <div className="container">
        {/* Add Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Hun Motors Logo" />
          </Link>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/brands" className="nav-link">Brendlər</Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className="nav-link">Sertifikatlar</Link>
          </li>
          <li className="nav-item">
            <Link to="/haqqimizda" className="nav-link">Haqqımızda</Link>
          </li>
          <li className="nav-item">
            <Link to="/elaqe" className="nav-link">Əlaqə</Link>
          </li>
        </ul>

        <button className="hamburger-icon" onClick={handleToggleNav}>
          &#9776;
        </button>
      </div>

      <div className={`navbar-overlay ${showNav ? 'show' : ''}`}>
        <ul className="navbar-nav-l">
          <li className="nav-item">
            <Link to="/brands" className="nav-link">Brendlər</Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className="nav-link">Sertifikatlar</Link>
          </li>
          <li className="nav-item">
            <Link to="/haqqimizda" className="nav-link">Haqqımızda</Link>
          </li>
          <li className="nav-item">
            <Link to="/elaqe" className="nav-link">Əlaqə</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
