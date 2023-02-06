import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`link has-dropdown-menu ${isOpen ? 'open-dropdown-menu' : ''}`}>
      <a href="#" onClick={toggleDropdown}>Services</a>
      <ul className={`dropdown-menu list-unstyled ${isOpen ? 'open' : ''}`}>
        <li className="group-title">Servers</li>
        <li><Link to='/cyber-security' className="dm-link">Cyber Security</Link></li>
        <li><Link to='/vps-hosting' className="dm-link">VPS Hosting Servers</Link></li>
        <li><Link to='/shared-hosting' className="dm-link">Shared Hosting Servers</Link></li>
        <li><Link to='/dedicated-server' className="dm-link">Dedicated Hosting Servers</Link></li>
        <li><Link to='/domains' className="dm-link st-new">Domains</Link></li>
        <li><a href="#" className="dm-link st-soon">Game Servers</a></li>
        <li className="group-title">Help &amp; Support</li>
        <li><Link to='/support' className="dm-link">Report Abuse</Link></li>
        <li className="group-title">User Registeration</li>
        <li><a href="login.html" className="dm-link">Login</a></li>
        <li><a href="register.html" className="dm-link">Register</a></li>
        <li className="group-title">Others</li>
        <li><Link to='/terms' className="dm-link">Terms</Link></li>
        <li><Link to='/404' className="dm-link">404</Link></li>
        <li><Link to='/404' className="dm-link st-soon">SSL Certificates</Link></li>
      </ul>
    </div>
  );
};

export default ServicesDropdown;