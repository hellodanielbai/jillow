import React from 'react';

const ListingIndexItem = (props) => {

    return (
        <li>
            <div className='listing-item-picture'>
                <img src={props.listing.photoUrls[0]} />
            </div>
            <div className='listing-index-item'>
                <div className='listing-index-item-price'>
                    ${props.listing.price}
                </div>
                <div className='listing-index-item-info'>
                    {props.listing.bd} bds 
                    {props.listing.ba} ba 
                    {props.listing.sqft} sqft
                </div>
                <div className='listing-index-item-address'> 
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