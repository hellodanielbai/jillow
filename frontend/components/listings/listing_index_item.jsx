import React from 'react';

const ListingIndexItem = (props) => {

    return (
        <li className="listing-child">
            <div>
                <img className='listing-item-picture' src={props.listing.photoUrls[0]} />
            </div>
            <div className='listing-index-item'>
                <div className='listing-index-item-price'>
                    ${props.listing.price}
                </div>
                <div className='listing-index-item-info'>
                    {props.listing.bd} bds &nbsp;
                    {props.listing.ba} ba &nbsp;
                    {props.listing.sqft} sqft &nbsp;
                </div>
                <div className='listing-index-item-address'> 
                    {props.listing.address}, &nbsp;
                    {props.listing.city}, &nbsp;
                    {props.listing.state} &nbsp;
                    {props.listing.zipcode} &nbsp;
                </div>
            </div>
        </li>
    )
};

export default ListingIndexItem