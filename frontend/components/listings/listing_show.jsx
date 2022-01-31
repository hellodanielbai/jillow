import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.listingId);
    }

    render() {
        return (
            <div className="selectedListing">
                {this.props.selectedListing.address}
            </div>
        )
    }
};

export default ListingShow;