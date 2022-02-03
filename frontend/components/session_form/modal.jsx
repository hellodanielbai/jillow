import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import DropDownContainer from '../navbar/dropdown_container';

function Modal({modal, closeModal, history}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer history={history} />;
            break;
        case 'signup':
            component = <SignupFormContainer history={history} />;
            break;
        case 'openDropDown':
            component = <DropDownContainer history={history} />;
            break;
        default:
            return null;
    }
    return (
        modal === "openDropDown" ? 
        <div className="modal-background2" onClick={closeModal}>
            <div onClick={closeModal}>
                { component }
            </div>
        </div>
        :
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);