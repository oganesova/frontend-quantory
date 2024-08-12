import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Home</Link>
                <div className="navbar-links">
                    <Link to="/profile" className="navbar-link">Profile</Link>
                    <Link to="/login" className="navbar-link">Login</Link>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;
