import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login, showDropDown }) => {
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
                    <Link className="navbar-item" to="/listings">Rent</Link>
                    <Link className="navbar-item" to="/sell">Sell</Link>
                </div>
                <div>
                    <div className="navbar-title">Jillow</div>
                </div>
                <div className="navbar-items-parent">
                    <a className="navbar-item" href="https://github.com/hellodanielbai">GitHub</a>
                    <a className="navbar-item" href="https://github.com/hellodanielbai">LinkedIn</a>
                    <button onClick={() => showDropDown()} className="dogButton">
                    <img alt="Your profile default icon" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQnVpbGRfTGF5ZXIiIGRhdGEtbmFtZT0iQnVpbGQgTGF5ZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1MCAxNTAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYzg4MjA1O30uY2xzLTJ7ZmlsbDojZmZmO30uY2xzLTN7ZmlsbDojMDAxNzUxO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi1uYW1lLW1kLW91dGxpbmUgY29weSAxMjU8L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNzUiIGN5PSI3NSIgcj0iNzUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMjcuNzM3LDgwLjgzOGMtOS45NDItMTUuNjg4LTE2LjgtNDMuMjktMzcuMzg5LTQzLjI5LTkuNDExLDAtMjEuMjU4LDUuNC0yNy41LDEzLjYxNC04LjQ0MSwxMS4xLTEzLjY3NywyMS4wNjMtMzAuNDA2LDI0LjkzMkwxOS4zNTQsNzkuNjExdjguMDgxQTE0LjM1LDE0LjM1LDAsMCwwLDMzLjcsMTAyLjA0MnM0LjU3OS40NjEsNDguMzM0LDBTMTMxLjY4NCw4Ny4wNjUsMTI3LjczNyw4MC44MzhaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTE3LjYxNCwxMDkuNTQ4aDBhMTUuNSwxNS41LDAsMCwxLTE1LjUtMTUuNVY0MS4xM2M1LjQ4OSwyLjYxMSwxMi41LDguMDA3LDE1LjUxMSwxNS41NjFMMTMyLjAzMyw4OC4zNUExNS41LDE1LjUsMCwwLDEsMTE3LjYxNCwxMDkuNTQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMzLjAwNiw3NS45NTVjLS4xODkuMDQ2LS4zNzIuMDk1LS41NjQuMTM5TDE5LjM1NCw3OS42MTF2OC4wODFhMTQuMzE2LDE0LjMxNiwwLDAsMCwuMjMyLDIuNUExNC41MDYsMTQuNTA2LDAsMCwwLDMzLjAwNiw3NS45NTVaIi8+PC9zdmc+" className='dogImage' />
                    </button>
                </div>
            </hgroup>
        </div>
    );
    return currentUser ? sessionOpened() : sessionClosed();
};

export default Navbar;