import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting'

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link></Link>
            <Link></Link>
        </nav>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting