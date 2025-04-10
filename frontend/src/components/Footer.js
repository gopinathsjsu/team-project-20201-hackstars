import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BookTable</h3>
          <p>Making restaurant reservations simple and convenient.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 BookTable. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 