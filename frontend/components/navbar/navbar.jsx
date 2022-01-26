import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login }) => {
    const sessionLinks = () => (
        <hgroup className="navbar1">
            <div>
                <Link className="navbar-item" to="#">Buy</Link>
                <Link className="navbar-item" to="#">Rent</Link>
                <Link className="navbar-item" to="#">Sell</Link>
                <Link className="navbar-item" to="#">Agent Finder</Link>
            </div>

            <div>
                <div className="navbar-title">Jillow</div>
            </div>

            <div>
                <Link className="navbar-item" to="#">Manage Rentals</Link>
                <Link className="navbar-item" to="#">Advertise</Link>
                <Link className="navbar-item" to="#">Help</Link>

                <Link className="navbar-item" to="/login" onClick={() => login('login')}>Sign in</Link>
            </div>
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