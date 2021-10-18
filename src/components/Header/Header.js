import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/login">Login</NavLink>
            <span> {user.displayName} </span>
            {user?.email && < button onClick={logOut}> Log Out</button>}

        </div >
    );
};

export default Header;