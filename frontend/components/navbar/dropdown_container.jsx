import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DropDown from './dropdown';

const mSTP = (state, ownProps) => {
    return {
        null: null
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(DropDown);