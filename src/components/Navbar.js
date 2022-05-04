import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navigation_container">
    <nav className="navigation d_flex">
      <ul className="d_flex">
        <li><h1><Link to="/">Bookstore CMS</Link></h1></li>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <span className="user-profile-wrapper d_flex">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
    </nav>
  </div>
);

export default Navbar;
