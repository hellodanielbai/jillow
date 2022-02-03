import React from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_actions';
import Listings  from './listings'
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/saves_actions'


const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings)
    };
};

const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    openModal: (type) => dispatch(openModal(type)),
    createSave: (user, listing) => dispatch(createSave(user, listing)),
    deleteSave: (user, listing) => dispatch(createSave(user, listing))
});

export default connect(mSTP, mDTP)(Listings);