import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">BookTable</Link>
        <div className="nav-links">
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/bookings">My Bookings</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 