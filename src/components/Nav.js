import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/TaskPage">Task</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
        </ul>
    </div>
  )
}

export default Nav