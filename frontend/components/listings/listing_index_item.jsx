import React from 'react';
import ListingLike from "./listing_like"
import {AiOutlineHeart} from "react-icons/ai"

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="listing-child">
                <div>
                    <img className='listing-item-picture' src={this.props.listing.photoUrls[0]} />
                </div>
                <div className='listing-index-item'>
                    <div className='listing-index-item-price'>
                        ${this.props.listing.price}
                    </div>
                    <div className='listing-index-item-info'>
                        {this.props.listing.bd} bds &nbsp;
                        {this.props.listing.ba} ba &nbsp;
                        {this.props.listing.sqft} sqft &nbsp;
                    </div>
                    <div className='listing-index-item-address'> 
                        {this.props.listing.address}, &nbsp;
                        {this.props.listing.city}, &nbsp;
                        {this.props.listing.state} &nbsp;
                        {this.props.listing.zipcode} &nbsp;
                        <ListingLike listing={this.props.listing} user={this.props.user} createSave={this.props.createSave} />
                    </div>
                </div>
            </div>
        )
    }
};

export default ListingIndexItem