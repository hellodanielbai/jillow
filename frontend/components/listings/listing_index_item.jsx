import React from 'react';

const ListingIndexItem = (props) => {
    return (
        <li className='anyListing'>
            <div>
                {props.listing.picture}
            </div>
            <div className='listing-data'>
                <div>
                    ${props.listing.price}
                </div>
                <div>
                    {props.listing.bd} bds 
                    {props.listing.ba} ba 
                    {props.listing.sqft}
                </div>
                <div>
                    {props.listing.address}, 
                    {props.listing.city}, 
                    {props.listing.state}
                    {props.listing.zipcode}
                </div>
            </div>
        </li>
    )
};

export default ListingIndexItem