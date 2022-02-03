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
                <div className="selectedListingPhotos">
                    {this.props.selectedListing.photoUrls.map((url, index) => {
                        return (
                            <img src={url} key={index} />
                        )
                    })}
                </div>

                <div className="selectedListingInfo"> 
                    <hr className="selectedLine"></hr>
                    <div className="selectedListingPrice">
                        ${this.props.selectedListing.price}
                    </div>
                    <div className="selectedListingBdBa">
                        {this.props.selectedListing.bd} bd &nbsp;
                        {this.props.selectedListing.ba} ba &nbsp;
                        {this.props.selectedListing.sqft} sqft &nbsp;
                    </div>
                    <div className="selectedListingAddress">
                        {this.props.selectedListing.address}, &nbsp;
                        {this.props.selectedListing.city}, &nbsp;
                        {this.props.selectedListing.state} &nbsp;
                        {this.props.selectedListing.zipcode} &nbsp;
                    </div>
                </div>
                <div>
                    <div className="selectedX" onClick={this.props.closeModal}>X</div>
                </div>
            </div>
        )
    }
};

export default ListingShow;