import React from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_actions';
import Listings  from './listings'
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave, fetchAllSaves } from '../../actions/saves_actions'


const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings),
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        // saves: Object.values(state.entities.saves)
    };

};

const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    fetchAllSaves: () => dispatch(fetchAllSaves()),
    openModal: (type) => dispatch(openModal(type)),
    createSave: (user, listing) => dispatch(createSave(user, listing)),
    deleteSave: (user, listing) => dispatch(deleteSave(user, listing))
});

export default connect(mSTP, mDTP)(Listings);