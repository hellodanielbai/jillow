import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ListingIndexItem from './listing_index_item';
import ListingShowContainer from './listing_show_container';


class Listings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedListing: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    } 

    componentDidMount() {
        this.props.fetchAllListings();
}

    handleClick(e) {
        e.preventDefault();
        this.setState({
            selectedListing: e.currentTarget.id
        })
    }

    closeModal() {
        this.setState({
            selectedListing: null
        })
    };

    render() {
        console.log(this.props.listings)
        if (!this.props.listings) return null
        return (
            <div>
                { this.state.selectedListing && (
                    < ListingShowContainer closeModal={this.closeModal} listingId={this.state.selectedListing} /> 
                )}

                <ul>
                    {this.props.listings.map(listing => {
                        return (
                            <div id={listing.id} onClick={this.handleClick} to={`/listings/${listing.id}`} key={listing.id}><ListingIndexItem listing={listing}/></div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Listings;