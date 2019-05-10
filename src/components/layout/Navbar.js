import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav style={navbarStyle} className="nav-wrapper light-blue lighten-1">
      <div className="container">
        <Link to='/' className="brand-logo">
          Domum
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const navbarStyle = {
  marginBottom: '40px'
};

export default Navbar;
