import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from './session_form';
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
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm)