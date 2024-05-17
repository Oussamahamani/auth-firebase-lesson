import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logOut=(e)=>{
    }
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">Signup</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={logOut}>Log Out</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;