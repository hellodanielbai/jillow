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
        return (
            <div className="selectedListing">
                
                <div className="selectedListingPhotos">
                    {this.props.selectedListing.photoUrls.map((url, index) => {
                        return (
                            <img className="selectedListingPhoto" src={url} key={index} />
                        )
                    })}
                </div>

                <div className="selectedListingInfo"> 
                <div>
                    
                    <div className="selectedX" onClick={this.props.closeModal}>
                        <svg width="24px" height="24px" focusable="false"><path d="M11.778 11.778L4 4l7.778 7.778L4 19.556l7.778-7.778zm0 0l7.778 7.778-7.778-7.778L19.556 4l-7.778 7.778z" stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                </div>
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
                    <div className="selectedListingDescription">
                        {this.props.selectedListing.description}
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingShow;