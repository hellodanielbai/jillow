import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
    // <nav className="login-signup">
    //     <Link to="/login">Login</Link>
    //     &nbsp;or&nbsp;
    //     <Link to="/signup">Sign up!</Link>
    // </nav>
    <hgroup className="header-group">
        <Link to="#">Buy</Link>
        <div>Rent</div>
        <div>Sell</div>
        <div>Agent Finder</div>
        <div>Zillow</div>
        <div>Sign in</div>
    <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    
);
    const personalGreeting = () => (
        <hgroup className="header-group">
            <Link to="#">Buy</Link>
            <div>Rent</div>
            <div>Sell</div>
            <div>Agent Finder</div>
            <div>Zillow</div>
            <div>Sign in</div>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;