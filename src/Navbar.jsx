import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
import { signOut } from 'firebase/auth';
import { auth } from './firebase/config';
import { useNavigate } from 'react-router-dom';
const Navbar = ({user,setUser}) => {

    const navigate=useNavigate()
    const logOut=async(e)=>{
        await signOut(auth)
        setUser(null)
        // navigate("/login")
    }
    return (
        <nav className="navbar">
            <ul className="navbar-list">
              {user.user &&  <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>}
            {!user.user&&    <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">Signup</Link>
                </li>}
           { !user.user && <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>}
            {user.user&&    <li className="navbar-item">
                    <span className="navbar-link" onClick={logOut}>Log Out</span>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;