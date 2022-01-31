import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login, logout }) => {

    const handleOnClick = () => {
        return (
            <div>
                <options>
                    hello
                </options>
            </div>
        )
    }

    const sessionClosed = () => (
        <div className="navbar-content">
            <hgroup className="navbar-left">
                <div>
                    <Link className="navbar-item" to="/buy">Buy</Link>
                    <Link className="navbar-item" to="/rent">Rent</Link>
                    <Link className="navbar-item" to="/sell">Sell</Link>
                </div>
                <div>
                    <div className="navbar-title">Jillow</div>
                </div>
                <div>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">GitHub</a>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">LinkedIn</a>
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
                </div>
                <div>
                    <div className="navbar-title">Jillow</div>
                </div>
                <div>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">GitHub</a>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">LinkedIn</a>
                    {/* <div className="dropdown">
                        <div>
                            <button className="navbar-item" onClick={() => handleOnClick()}>DropDown</button>
                        </div> */}
                        <button className="navbar-item" onClick={() => logout()}>Sign Out</button>
                    {/* </div> */}
                </div>
            </hgroup>
        </div>
    );
    return currentUser ? sessionOpened() : sessionClosed();
};

export default Navbar;