import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        openModal: (type) => dispatch(openModal(type))
    };
};

export default connect(mSTP, mDTP)(SessionForm)