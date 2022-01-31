import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ListingIndexItem from './listing_index_item'


class Listings extends React.Component {
    constructor(props) {
        super(props)
    } 

    componentDidMount() {
        this.props.fetchAllListings();
    }

    render() {
        if (!this.props.listings) return null
        return (
            <ul>
                {this.props.listings.map(listing => {
                    return <Link to={`/listings/${listing.id}`}><ListingIndexItem key={listing.id} listing={listing}/></Link>
                })}


                {/* {this.props.listings.map(listing => {
                    return <Link onClick={() => {this.props.openModal("viewListing")}} to={`/listings/${listing.id}`}><ListingIndexItem key={listing.id} listing={listing}/></Link>
                })} */}
            </ul>
        )
    }
}

export default Listings;