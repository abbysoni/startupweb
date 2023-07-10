import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* <a to="/">
        <img className="logo" src="/logo.png" alt="Logo" />
      </a> */}
      <nav className="navigation">
        <a to="/become-a-professional">Become a Professional</a>
        <a to="/help">Helps</a>
        <a to="/login">Login</a>
        <a to="/sign-up">Sign Up</a>
      </nav>
     
    </header>
  );
};

export default Header;