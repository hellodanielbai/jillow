import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListing(this.props.listingId);
    }


    render() {
        // if (!this.props.listing) {
        //     return null;
        // }
        console.log(this.props)
        return (

            <div className="selectedListing">
                <div className="selectedListingPhoto">
                    {this.props.selectedListing.photoUrls.map((url, index) => {
                        return (
                            <img src={url} key={index} />
                        )
                    })}
                </div>
                <div className="selectedListingPrice">
                    ${this.props.selectedListing.price}
                </div>
                <div className="selectedListingInfo">
                    {this.props.selectedListing.bd}bd
                    {this.props.selectedListing.ba}ba
                    {this.props.selectedListing.sqft}sqft
                </div>
                <div className="selectedListingAddress">
                    {this.props.selectedListing.address}, 
                    {this.props.selectedListing.city}, 
                    {this.props.selectedListing.state} 
                    {this.props.selectedListing.zipcode}
                </div>

                <div>
                    <div className="X" onClick={this.props.closeModal}>X</div>
                </div>

            </div>
        )
    }
};

export default ListingShow;