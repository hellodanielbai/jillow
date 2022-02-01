import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listings_actions';
import ListingShow  from './listing_show'
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    return {
        selectedListing: state.entities.listings[ownProps.listingId]
    };
};

const mDTP = dispatch => {
    return {
        fetchListing: (listingId) => dispatch(fetchListing(listingId))
    };
};

export default connect(mSTP, mDTP)(ListingShow);