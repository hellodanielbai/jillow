import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        openModal: (type) => dispatch(openModal(type)),
        closeModal: (type) => dispatch(closeModal(type))
    };
};

export default connect(mSTP, mDTP)(SessionForm)