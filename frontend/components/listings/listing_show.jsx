import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchListing } from "../../util/listing_util";


class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetchListing(this.props.currentListing);
    }

    render() {
        if (!this.props.listing) return null
        return (
            <div>
                HELLO
            </div>
        )
    }
};

export default ListingShow;