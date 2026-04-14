import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">VD.</a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#highlights" className="nav-link">Highlights</a>
          <a href="#leadership-roles" className="nav-link">Leadership</a>
          <a href="#education" className="nav-link">Education</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
