import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login, logout }) => {
    const sessionClosed = () => (
        <div className="navbar-content">
            <hgroup className="navbar-left">
                <div className="navbar-items-parent">
                    <Link className="navbar-item" to="/listings">Buy</Link>
                    <Link className="navbar-item" to="/rent">Rent</Link>
                    <Link className="navbar-item" to="/sell">Sell</Link>
                </div>
                <div>
                    <div className="navbar-title">Jillow</div>
                </div>
                <div className="navbar-items-parent">
                    <a className="navbar-item" href="https://github.com/hellodanielbai">GitHub</a>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">LinkedIn</a>
                    <a className="navbar-item" onClick={() => login()}>Sign in</a>
                </div>
            </hgroup>
        </div>
    );
    
    const sessionOpened = () => (
        <div className="navbar-content">
            <hgroup className="navbar-left">
                <div className="navbar-items-parent">
                    <Link className="navbar-item" to="/listings">Buy</Link>
                    <Link className="navbar-item" to="/rent">Rent</Link>
                    <Link className="navbar-item" to="/sell">Sell</Link>
                </div>
                <div>
                    <div className="navbar-title">Jillow</div>
                </div>
                <div className="navbar-items-parent">
                    <a className="navbar-item" href="https://github.com/hellodanielbai">GitHub</a>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">LinkedIn</a>
                    <a className="navbar-item" onClick={() => logout()}>Sign Out</a>
                    {/* <div className="dropdown">
                        <div>
                            <button className="navbar-item" onClick={() => handleOnClick()}>DropDown</button>
                        </div> */}
                    {/* </div> */}
                </div>
            </hgroup>
        </div>
    );
    return currentUser ? sessionOpened() : sessionClosed();
};

export default Navbar;