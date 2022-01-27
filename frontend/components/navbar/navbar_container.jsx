import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar'
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.id
    };
};

const mDTP = dispatch => ({
    login: () => dispatch(openModal('login')),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);