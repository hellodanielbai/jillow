import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up here</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        logout: () => dispatch(logout())
    };
};

export default connect(mSTP, mDTP)(SessionForm)