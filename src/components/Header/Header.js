import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header-container">
          <div className="logo">
          <img src={logo} alt="" />
          </div>
            <nav className="nav-bar">
                <a href="#">Shop</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory here</a>
            </nav>
        </div>
    );
};
 
export default Header;