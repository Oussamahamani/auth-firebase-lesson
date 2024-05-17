import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
const Navbar = ({user}) => {
    const logOut=(e)=>{
    }
    return (
        <nav className="navbar">
            <ul className="navbar-list">
              {user &&  <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>}
            {!user&&    <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">Signup</Link>
                </li>}
           { !user && <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>}
            {user&&    <li className="navbar-item">
                    <span className="navbar-link" onClick={logOut}>Log Out</span>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;