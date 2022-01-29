import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login, logout }) => {
    const sessionClosed = () => (
        <div className="navbar-content">
            <hgroup className="navbar-left">
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
                    <button className="navbar-item" onClick={() => login()}>Sign in</button>
                </div>
            </hgroup>
        </div>
    );
    
    const sessionOpened = () => (
        <div className="navbar-content">
            <hgroup className="navbar-right">
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
                    <button className="navbar-item" onClick={() => logout()}>Sign Out</button>
                </div>
            </hgroup>
        </div>
    );

    return currentUser ? sessionOpened() : sessionClosed();
};

export default Navbar;