import React from 'react';
import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_actions';
import Listings  from './listings'

const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings)
    };
};

const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings())
});

export default connect(mSTP, mDTP)(Listings);