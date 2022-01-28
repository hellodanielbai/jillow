import * as ListingsAPIUtil from "../util/listing_util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

//regular actions
export const receiveAllListings = (listings) => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
});

export const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

//thunk actions
export const fetchAllListings = () => dispatch => (
    ListingsAPIUtil.fetchAllListings().then(listings => (
        dispatch(receiveAllListings(listings))
    ))
);

export const fetchListing = (listingId) => dispatch => (
    ListingsAPIUtil.fetchListing(listingId).then(listing => (
        dispatch(receiveListing(listing))
    ))
);

export const addListing = (data) => dispatch => (
    ListingsAPIUtil.createListing(data).then(
        listing => dispatch(receiveListing(listing),
        error => dispatch(receiveErrors(error)))
    )
);