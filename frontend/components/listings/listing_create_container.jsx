import React from "react";
import { connect } from "react-redux";
import ListingCreate from "./listing_create";
import { addListing } from "../../actions/listings_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        listings: Object.values(state.entities.listings),
        errors: state.errors.listings,
        ownProps
    }
}

const mDTP = (dispatch) => {3
    return {
        addListing: (data) => dispatch(addListing(data))
    }
}

export default connect(mSTP, mDTP)(ListingCreate);
