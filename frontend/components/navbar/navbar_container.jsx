import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar'
import { openModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.id
    };
};

const mDTP = dispatch => ({
    // logout: () => dispatch(logout()),
    login: (modalState) => dispatch(openModal(modalState))
});

export default connect(mSTP, mDTP)(Navbar);