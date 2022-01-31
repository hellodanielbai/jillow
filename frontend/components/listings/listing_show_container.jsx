import React from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_actions';
import ListingShow  from './listing_show'
import { openModal } from '../../actions/modal_actions';
import { updateCurrentListing } from '../../actions/listings_actions';


const mSTP = (state, ownProps) => {
    return {
        currentListing: Object.values(state.entities.listings.currentListing),
        allListings: Object.values(state.entities.listings)
    };
};

export default connect(mSTP)(ListingShow);