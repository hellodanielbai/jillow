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
                {this.props.selectedListing.city}
                {this.props.selectedListing.state}
                {this.props.selectedListing.zipcode}
                {this.props.selectedListing.price}
                {this.props.selectedListing.sqft}

            </div>
        )
    }
};

export default ListingShow;